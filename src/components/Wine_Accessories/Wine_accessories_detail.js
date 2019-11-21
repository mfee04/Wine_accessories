import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import $ from 'jquery'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//css樣式
import '../../style/Wine_accessories/Wine_service_detail.scss'

//分頁連結
import Wine_acce_detail_breadcrumb from './Wine_acce_detail_breadcrumb'
import Wine_acce_detail_picslider from './Wine_acce_detail_picslider'
import Wine_acce_detail_picslider_preview from './Wine_acce_detail_picslider_preview'
import Wine_acce_detail_info from './Wine_acce_detail_info'
import Wine_acce_detail_info_btn from './Wine_acce_detail_info_btn'
import Wine_acce_detail_dec_title from './Wine_acce_detail_dec_title'
import Wine_acce_detail_recommenditem from './Wine_acce_detail_recommenditem'

import Navigation_Navber from '../Navigation_Navber/Navigation_Navber'
import Footer from '../Navigation_Navber/Footer'
class Wine_accessories_detail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      details: [],
    }
    console.log(this.props.match.params)
  }
  //JQ放這
  componentDidMount() {
    // 幫您推薦的商品價錢的 $
    $(".recommend_price").prepend("$ ")


    fetch("http://localhost:3000/Wine_accessories_detail/"+this.props.match.params.sid)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        details : responseJson,
      });
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    

    if (!this.state.details.length) return <></>

    //解構賦值
    const { details } = this.state

    return (
      <>
        <Navigation_Navber />

        {details.map((info, i) => (
          <Container className="Wine_acce_detail_con">
            <Wine_acce_detail_breadcrumb />

            <Row>
              <Col lg={6} md={12} sm={12} className="my-4">
                <Wine_acce_detail_picslider
                  key={i}
                  product_pic={info.product_pic}
                />
                <Wine_acce_detail_picslider_preview
                  key={i}
                  product_pic={info.product_pic}
                />
              </Col>

              <Col lg={6} md={12} sm={12} className="my-4">
                <Wine_acce_detail_info
                  key={i}
                  name={info.name}
                  product_type={info.product_type}
                  brand={info.brand}
                  product_price={info.product_price}
                  product_size={info.product_size}
                  product_capacity={info.product_capacity}
                />
                <Wine_acce_detail_info_btn />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Wine_acce_detail_dec_title />
              </Col>
            </Row>

            <Row>
              <Col lg={12} md={12} className="goods_description">{info.product_introduce}</Col>
              <Col lg={12} md={12} className="goods_brand_story">{info.brand_story}</Col>
            </Row>

            <Row>
              <Col lg={12} className="goods_recommend_title">幫您推薦</Col>
            </Row>

            <Row className="mt-4">
              <Col className="recommend_area d-flex">
                <Wine_acce_detail_recommenditem />
              </Col>
            </Row>

          </Container>
          ))}

        <Footer />
      </>
    )
  }
}
export default Wine_accessories_detail