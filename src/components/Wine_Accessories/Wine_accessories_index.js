import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import $ from 'jquery'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//css樣式
import '../../style/Wine_accessories/Wine_service_index.scss'

//分頁連結
import Accessories_left_cate from './Accessories_left_cate'
import Accessories_left_sort from './Accessories_left_sort'
import Accessories_left_priceSlider from './Accessories_left_priceSlider'
import Accessories_right_goods from './Accessories_right_goods'
import Accessories_right_pages from './Accessories_right_pages'

class Wine_accessories_index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          goods: [],
          filter:[]
        }
    }
    //
    componentDidMount () {
      fetch('http://localhost:3000/wine-acce-db')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          goods : responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });

    }

    // 在子元件觸發 handlefilter 事件後再傳handlefilter('XXX')值到這裡（父元件），並用value這個變數去接
    // 接了之後把 value　傳回到node
    handlefilter=(value)=>()=>{
      console.log(value)
      let arr=[]
      fetch('http://localhost:3000/wine-acce-item/'+value)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          goods : responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

    render() {
      if(!this.state.goods.length) return <></>
     
      //解構賦值
      const {goods} = this.state

      console.log(goods)
      const pageItems = goods.length
      console.log(pageItems)
        return (
          <>
          <Container className="Wine_acce_index_con">
              <Row>
              {/* 左邊 分類篩選*/}
                <Col lg={3} sm={12} id="left_menu">
                  <Accessories_left_cate handlefilter={this.handlefilter}/>
                  <Accessories_left_sort/>
                  <Accessories_left_priceSlider/>
                </Col>
              {/* 右邊 顯示商品列表*/}
              
                <Col lg={9} sm={12} id="main_area">
                  <Row>
                  {goods.map((item)=>         
                    <Accessories_right_goods
                      key={item.sid}
                      sid={item.sid}
                      name={item.name}
                      product_price={item.product_price}
                      product_pic={item.product_pic}
                      category_1st={item.category_1st}
                      category_2nd={item.category_2nd}
                    />)}

                  {/* 下方顯示總頁數*/}
                  <Col lg={12}>
                    <Accessories_right_pages/>
                  </Col>

                  </Row>
                </Col>
              </Row>
          </Container>
          </>
        )
    }
}
export default Wine_accessories_index