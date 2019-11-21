import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import $ from 'jquery'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//css樣式
import '../../style/Wine_Tasting/Wine_Tasting_index.scss'
//分頁連結
import Tasting_left_origin from './Tasting_left_origin'
import Tasting_left_cate from './Tasting_left_cate'
import Tasting_left_sort from './Tasting_left_sort'
import Tasting_left_priceSlider from './Tasting_left_priceSlider'
import Tasting_right_goods from './Tasting_right_goods'
import Tasting_right_pages from './Tasting_right_pages'

class Wine_Tasting_index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goods: [],
      filter: []
    }
  }
  //JQ放這
  componentDidMount() {

    fetch('http://localhost:3000/wine-wine-db')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          goods: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });

    // RWD 左邊欄位下拉選單
    $(".plus-minus-cate").click(function () {
      $("#left_menu_cate>ul").slideToggle()
      $(".plus-cate").toggle()
      $(".minus-cate").toggle()
    })
    $(".plus-minus-sort").click(function () {
      $(".sort_option").slideToggle()
      $(".plus-sort").toggle()
      $(".minus-sort").toggle()
    })
  }

  render() {
    console.log('parent')
    if (!this.state.goods.length) return <></>

    //解構賦值
    const { goods } = this.state
    return (
      <>
        <Container>
          <Row>
            {/* 左邊 分類篩選*/}
            <Col lg={3} sm={12} id="left_menu">
              <Tasting_left_origin />
              <Tasting_left_cate />
              <Tasting_left_sort />
              <Tasting_left_priceSlider />
            </Col>
            {/* 右邊 顯示商品列表*/}
            <Col lg={9} sm={12} id="main_area">
              <Row>
                {goods.map((item) =>
                  <Tasting_right_goods
                    key={item.sid}
                    sid={item.sid}
                    name={item.name} //名稱
                    kind={item.kind} //種類
                    producing_countries={item.producing_countries} //生產國
                    brand={item.brand}  //品牌
                    Production_area={item.Production_area} //產區
                    capacity={item.capacity} //容量
                    price={item.price} //$$
                    my_file={item.my_file} //圖片
                  />)}
                {/* 下方顯示總頁數*/}
                <Col lg={12}>
                  <Tasting_right_pages />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Wine_Tasting_index