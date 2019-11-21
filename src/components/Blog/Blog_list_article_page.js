import React from 'react'
import $ from 'jquery'
import AOS from 'aos';

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//css樣式
import '../../style/Blog/css/style.css'
import '../../style/Blog/css/aos.css';

//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

class Blog_list_article extends React.Component {
  constructor(props) {
    super(props)
  }

  //JQ放這，render之後會觸發
  componentDidMount() {
    AOS.init({
      duration : 750
    })
  }


  render() {
    return (
      <>
        <Row className="mt-3 mb-5">
          <Col className="text-center" data-aos='fade-up'>
            <div className="block-27">
              <ul>
                <li><Link to="#">&lt;</Link></li>
                <li className="active"><span>1</span></li>
                <li><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>
                <li><Link to="#">&gt;</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}
export default Blog_list_article