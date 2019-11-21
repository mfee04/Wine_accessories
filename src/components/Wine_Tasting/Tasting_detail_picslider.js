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


class Tasting_detail_picslider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // console.log(this.props.match.params)
  }
    //JQ放這
    componentDidMount() {

    }

    render() {
        return (
          <>
            <div id="slider_wrap">
              <div className="slider-cont-wrap">
                <ul className="d-flex slider-cont">
                  <li><img src={`http://localhost/bistro/lib/images/wine/uploads/${this.props.my_file}`} /></li>
                  <li><img src="../images/Wine_Accessories/slider01.jpg" alt=""/></li>
                  <li><img src="../images/Wine_Accessories/slider03.jpg" alt=""/></li>
                  <li><img src="../images/Wine_Accessories/slider04.jpg" alt=""/></li>
                </ul>
              </div>
            </div>
          </>
        )
    }
}
export default Tasting_detail_picslider