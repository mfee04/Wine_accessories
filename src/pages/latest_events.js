import React from 'react'
//樣式
import { Link, withRouter } from 'react-router-dom'
import Navigation_Navber from '../components/Navigation_Navber/Navigation_Navber'
import Footer from '../components/Navigation_Navber/Footer'
import { Col, Row, Container, Dropdown, DropdownButton } from 'react-bootstrap'
import CardRow from '../components/latest_events/CardRow'
import Dropdown_Button from '../components/latest_events/Dropdown_Button'
import FilterOption from '../components/latest_events/FilterOption'
import Pagination from '../components/latest_events/Pagination'

class latest_events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      getData: true,
      data_oj: [],
      city: "",
      price: "",

      picture: "",
      activity_name: "",
      location: "",
      Introduction: "",
      activity_start_Date: "",
      activity_end_Date: "",
    }
  }
  componentDidMount() {
    const url = 'http://localhost:3000/latest_events'

    this.requestToServer(url, 'GET')
  }
  requestToServer = async (url, method, data = {}) => {
    // GET方法不有body，先設定出樣版物件
    const requestTemplate = new Request(url, {
      method: method,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    let req = requestTemplate

    // 如果不是GET再加上body
    if (method !== 'GET')
      req = new Request(requestTemplate, { body: JSON.stringify(data) })

    try {
      const response = await fetch(req)
      const jsonObject = await response.json()
      if (method === 'GET')
        this.setState({
          data_oj: jsonObject,
        })

      // console.log(jsonObject)
    } catch (error) {
      // Error
      this.setState({ result: error })
      console.log('錯誤訊息', error)
    }
  }
  render() {
    const { data_oj } = this.state
    // console.log(data_oj) // 我picture會拿到字串
    return (
      <>
        <Navigation_Navber />
        <Container>
          <Dropdown_Button />
          <Row>
            <FilterOption />
            <Col sm={10}>
              <Row>
                {data_oj.map(data => {
                  const pictures = JSON.parse(data.picture) // 我資料庫圖片用陣列存多張,所以data.picture會拿到字串,需要JSON.parse解成陣列
                  return <CardRow
                    key={data.sid}
                    activity_name={data.activity_name}
                    Introduction={data.Introduction}
                    picture={pictures[0]}
                    activity_start_Date={data.activity_start_Date}
                    activity_end_Date={data.activity_end_Date}
                    price={data.price}
                    location={data.location}
                  />
                })}
              </Row>
            </Col>
          </Row>
          <Pagination />
        </Container>
        <Footer />
        {/* <CardRow
            /> */}
      </>
    )
  }
}


export default withRouter(latest_events)