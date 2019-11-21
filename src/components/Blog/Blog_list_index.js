import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
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
import Blog_list_header from './Blog_list_header'
import Blog_list_article from './Blog_list_article'
import Blog_list_article_page from './Blog_list_article_page'
import Blog_list_right_cate from './Blog_list_right_cate'
import Blog_article_info from './Blog_article_info'
import Blog_article_left_cate from './Blog_article_left_cate'

class Blog_list_index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: [],
    }
  }

  async componentDidMount() {
    await fetch('http://localhost:3000/blog-db')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          article: responseJson,
        });
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });

    //AOS Animate
    AOS.init({
      duration: 2000
    })
  }

  // 在子元件觸發 handlefilter 事件後再傳handlefilter('XXX')值到這裡（父元件），並用value這個變數去接
  // 接了之後把 value　傳回到node
  handlefilter = (value) => () => {
    console.log(value)
    let arr = []

    fetch('http://localhost:3000/blog-item/' + value)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          article: responseJson,
        });
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.article.length) return <></>

    //解構賦值
    const { article } = this.state

    return (
      <>
        <Container fluid={true} style={{ padding: 0, marginBottom: 25 }}>
          <Blog_list_header />
        </Container>

        <Container>
          <Row>
            <Col lg={9} md={12} sm={12} id="main_area">
              {article.map((item) =>
                <Blog_list_article
                  key={item.sid}
                  title={item.title}
                  pic={item.pic}
                  shortContent={item.shortContent}
                  content={item.content}
                  createdAt={item.createdAt}
                />)}
            </Col>
            <Col lg={9} md={12} sm={12}>
              <Blog_list_article_page />
            </Col>

            <Col lg={3} md={12} sm={12} id="right_menu" style={{overflowX:'hidden'}}>
              <Blog_list_right_cate />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Blog_list_index