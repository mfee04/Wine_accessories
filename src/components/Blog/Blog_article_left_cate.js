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

class Blog_article_left_cate extends React.Component {
    constructor(props) {
        super(props)
    }
    //JQ放這
    componentDidMount() {
        AOS.init({
            duration : 1500
        })
    }

    render() {
        return (
          <>
            <Col className="sidebar pr-lg-5 ftco-animate">
                <div className="sidebar-box ftco-animate" data-aos='fade-right'>
                    <ul className="categories">
                        <h3 className="heading mb-4">CATEGORIES</h3>
                        <li><Link to="#">2019 10月<span>(5)</span></Link></li>
                        <li><Link to="#">2019 9月<span>(12)</span></Link></li>
                        <li><Link to="#">2019 8月<span>(14)</span></Link></li>
                        <li><Link to="#">2019 7月<span>(7)</span></Link></li>
                        <li><Link to="#">2019 6月<span>(6)</span></Link></li>
                        <li><Link to="#">2019 5月<span>(10)</span></Link></li>
                    </ul>
                </div>

                <div className="sidebar-box ftco-animate">
                    <h3 className="heading mb-4" data-aos='fade-right'>RECENT BLOG</h3>
                    <div className="block-21 mb-4 d-flex" data-aos='fade-right'>
                        <a className="blog-img mr-4" style={{backgroundImage: 'url('+'../images/Blog/image1.jpg'+')'}}></a>
                        <div className="text">
                            <h3><Link to="#">五種食物幫助你解酒，咖啡不能亂喝！</Link></h3>
                            <div className="meta">
                                <div><Link to="#"><i className="fas fa-calendar-alt"></i> February 12, 2019</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="block-21 mb-4 d-flex" data-aos='fade-right'>
                        <a className="blog-img mr-4" style={{backgroundImage: 'url('+'../images/Blog/image2.jpg'+')'}}></a>
                        <div className="text">
                            <h3><Link to="#">超簡單酒譜！炎炎夏日也能輕鬆調出餐前開胃酒Spritz</Link></h3>
                            <div className="meta">
                                <div><Link to="#"><i className="fas fa-calendar-alt"></i> February 12, 2019</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="block-21 mb-4 d-flex" data-aos='fade-right'>
                        <a className="blog-img mr-4" style={{backgroundImage: 'url('+'../images/Blog/image3.jpg'+')'}}></a>
                        <div className="text">
                            <h3><Link to="#">3 種威士忌調酒，五分鐘快速搞定！</Link></h3>
                            <div className="meta">
                                <div><Link to="#"><i className="fas fa-calendar-alt"></i> February 12, 2019</Link></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-box ftco-animate" data-aos='fade-right'>
                    <h3 className="heading mb-4">TAG CLOUD</h3>
                    <div className="tagcloud">
                        <Link to="#" className="tag-cloud-link">氣泡酒</Link>
                        <Link to="#" className="tag-cloud-link">威士忌</Link>
                        <Link to="#" className="tag-cloud-link">解酒</Link>
                    </div>
                </div>
            </Col>
          </>
        )
    }
}
export default Blog_article_left_cate