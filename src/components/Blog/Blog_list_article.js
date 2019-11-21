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

    $(function(){
      var len = 100; // 超過100個字以"..."取代
      $(".JQellipsis").each(function(i){
          if($(this).text().length>len){
              $(this).attr("title",$(this).text());
              var text=$(this).text().substring(0,len-1)+"...";
              $(this).text(text);
          }
      });
    });
  }


  render() {
    return (
      <>
        <Row>
          <Col lg={12} md={12} className="ftco-animate">

            <div className="blog-entry d-lg-flex" data-aos='fade-up'>
              <div className="half">
                <Link to="/Blog_article" className="img d-flex align-items-end" style={{backgroundImage: 'url('+'../images/Blog/image1.jpg'+')'}}>
                  <div className="overlay"></div>
                </Link>
              </div>
              <div className="text px-md-4 px-lg-5 half pt-3">
                <p className="meta d-flex">
                  <span className="ml-auto pl-3">{this.props.createdAt}</span>
                </p>
                <h3><Link to="/Blog_article">{this.props.title}</Link></h3>
                <p>{this.props.shortContent}</p>
                <p className="mb-0">
                  <Link to="/Blog_article" className="btn btn-primary">Read More <i class="fas fa-long-arrow-alt-right"></i></Link>
                </p>
              </div>
            </div>

            {/* <div className="blog-entry d-lg-flex" data-aos='fade-up'>
              <div className="half">
                <Link to="/Blog_article" className="img d-flex align-items-end" style={{backgroundImage: 'url('+'../images/Blog/image2.jpg'+')'}}>
                  <div className="overlay"></div>
                </Link>
              </div>
              <div className="text px-md-4 px-lg-5 half pt-3">
                <p className="meta d-flex">
                  <span className="ml-auto pl-3">July 01, 2019</span>
                </p>
                <h3><Link to="/Blog_article">超簡單酒譜！輕鬆調出餐前開胃酒Spritz</Link></h3>
                <p>
                  義大利國民飲料「Spritz」是義大利北部著名的開胃酒，起源於威尼斯城市，但除了濃縮咖啡外，其實也很常看到的就是一杯杯橘色的酒，帶點苦味的柳橙氣泡酒就是今天要介紹的
                  Spritz ！
                </p>
                <p className="mb-0">
                  <Link to="/Blog_article" className="btn btn-primary">Read More <i class="fas fa-long-arrow-alt-right"></i></Link>
                </p>
              </div>
            </div> */}

            {/* <div className="blog-entry d-lg-flex" data-aos='fade-up'>
              <div className="half">
                <Link to="/Blog_article" className="img d-flex align-items-end" style={{backgroundImage: 'url('+'../images/Blog/image3.jpg'+')'}}>
                  <div className="overlay"></div>
                </Link>
              </div>
              <div className="text px-md-4 px-lg-5 half pt-3">
                <p className="meta d-flex">
                  <span className="ml-auto pl-3">March 01, 2019</span>
                </p>
                <h3><Link to="/Blog_article">3 種威士忌調酒，五分鐘快速搞定！</Link></h3>
                <p>
                  對於愛酒成痴的酒鬼們來說，威士忌可說是酒類中的最愛，光是單喝威士忌，就有很多不同的喝法，不過，偶爾就是會想變換一下口味，今天要介紹五種威士忌調酒，五分鐘內就能快速搞定，看完這篇，趕快和三五好友們在家
                  DIY 威士忌調酒吧！
                </p>
                <p className="mb-0">
                  <Link to="/Blog_article" className="btn btn-primary">Read More <i class="fas fa-long-arrow-alt-right"></i></Link>
                </p>
              </div>
            </div> */}

          </Col>
        </Row>
      </>
    )
  }
}
export default Blog_list_article