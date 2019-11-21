import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//css樣式
// import '../../style/Wine_accessories/Wine_accessories_index.scss'
//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import $ from 'jquery'

//商品細節頁

class Accessories_right_goods extends React.Component {
  constructor(props) {
    super(props)
    // console.log("match"+this.props.sid)
  }
  //JQ放這
  componentDidMount() {
  }

  render() {
    return (
      <>
          <Col lg={3} md={6} sm={6} className="mt-4 goods">
            <Link to={`Wine_accessories_detail/${this.props.sid}`}>
              <div className="goods_pic">
                <img src={`http://localhost/bistro/lib/images/acce/test/${this.props.product_pic}`} alt="" />
                {/* <img src="../images/decanter-holmegaard.jpg" alt="" /> */}
              </div>
            </Link>
            <p>{this.props.name}</p>
            <div className="goods_info d-flex justify-content-between align-items-center">
              <div className="price_area">
                <span>$<del>{this.props.product_price}</del></span> 
                <span className="price_discount ml-2">${Math.floor(this.props.product_price*0.9)}</span>
              </div>
              <div className="goods_icon d-flex">
                <div className="goods_icon_compare">
                  <img src="../images/Wine_Accessories/icon-compare_wh.png" alt="" />
                </div>
                <div className="goods_icon_compare">
                  <img src="../images/Wine_Accessories/icon-like_wh.png" alt="" />
                </div>
                <div className="goods_icon_compare">
                  <img src="../images/Wine_Accessories/icon-cart_wh.png" alt="" />
                </div>
              </div>
            </div>
          </Col>
      </>
    )
  }
}
export default Accessories_right_goods