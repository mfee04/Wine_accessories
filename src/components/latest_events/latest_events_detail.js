import React from 'react'
//樣式
import '../../style/latest_events/latest_events_detail.scss'
import Navigation_Navber from '../Navigation_Navber/Navigation_Navber'
import CardRow from './CardRow'
import Footer from '../Navigation_Navber/Footer'
// import slick from '../Navigation_Navber/Footer'
import { Container, Col, Row, Button } from 'react-bootstrap'
// import $ from 'jquery'
import Swiper_loop_mode from './Swiper_loop_mode'

class latest_events_detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:this.props.location.state,
            total: 0, // 數量
            total_price: 0, // 總價

            activity_name: this.props.activity_name,
            Introduction: this.props.Introduction,
            picture: this.props.picture,
            activity_start_Date: this.props.activity_start_Date,
            activity_end_Date: this.props.activity_end_Date,
            price: this.props.price,
            key: this.props.key,
        }
        // console.log(this.props)
        // console.log(this.state.data[0].picture)  // data[0]拿到物件
        // console.log(this.state.data) // data是陣列 只包一個物件
    }

    componentDidMount() {

    }

    handleClick = value => {  //react不會綁定 所以要用()=>自己綁定
        this.setState({
            // total: this.state.total + value,
            total: ((this.state.total + value) < 0 ? 0 : this.state.total + value),  // 票券數小於0設成0 
            total_price: ((this.state.total + value) < 0 ? 0 : (this.state.total + value) * (this.state.data.price)), //總價=票券數X票價
        })

    }

    render() {

        console.log(typeof this.state.data.Introduction)
        console.log(typeof this.state.data.Introduction.replace(/^".*"$/,' '))
        return (
            <>
                <Navigation_Navber />
                <div className="pt-3 latest_events_detail_pic_border">
                    {/* <img src="../images/Container_News/StockSnap_6JMD0WXXTG.jpg" alt="" className="" /> */}
                    <img src={`http://localhost/bistro666/lib/images/activity/uploads/${this.state.data.picture}`} alt="" className="" />
                </div>
                <Container className="events_detail_container">

                    <Row>
                        <Col sm={9}>
                            <div className="pt-5">
                                <h1>{this.state.data.activity_name}</h1>
                            </div>
                            <div className="pt-5">
                                <i class="fas fa-calendar-alt"></i>
                                <span>&emsp;活動時間</span>
                                <div>{this.state.data.activity_start_Date} ~ {this.state.data.activity_end_Date}</div>
                            </div>
                            <div className="pt-3">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>&emsp;活動地點</span>
                                <div>{this.state.data.location}</div>
                            </div>

                            <section className="pb-5">
                                <div>
                                    <div className="pt-5 events_section_title">活動介紹</div>
                                    <article>

                                    {this.state.data.Introduction.replace(/^".*"$/,' ')}
                                    {/* {this.state.data.Introduction.replace(/"/g,' ')} */}
                                        {/* │一張票卷，同時享受三場專屬於大人的美好活動│

                        2020早春─府城葡萄酒生活節 / 府城日本酒展 / 府城美酒美食節

                        【日期】109年1月4日(星期六)至109年1月5日(星期日)

                        【時間】上午11點至晚上6點(酒展)/下午2點至晚上8點(美食節)

                        【地點】臺南文化創意產業園區 (台南市東區北門路二段16號)

                        【主辦單位】WWW Wine Life

                        【協辦單位】台灣代駕、Accupass、臺南文化創意產業園區、那個那裏

                        【票劵注意事項】票卷皆為單日入場，如希望連來兩日，現場有開放加購劵唷!!!



                        ‧ 2020早春─府城葡萄酒生活節

                        現場超過10家酒商，超過100種酒款，一次帶您環遊葡萄酒的精彩世界。

                        不用親自飛到世界各地，一次體驗超過10個國家的精采酒款，感受葡萄酒與各類美食搭配的美好世界。
        <br />
                                        <img src="https://static.accupass.com/eventintro/1910111130371145998334.jpg" alt="" />
                                        <br />

                                        ‧ 2020早春─府城葡萄酒生活節

                                        現場超過10家酒商，超過100種酒款，一次帶您環遊葡萄酒的精彩世界。

                                        不用親自飛到世界各地，一次體驗超過10個國家的精采酒款，感受葡萄酒與各類美食搭配的美好世界。
        <br />
                                        <img src="https://static.accupass.com/eventintro/1910111131026229723630.jpg" alt="" /> */}
                                    </article>
                                </div>
                                {/* <div className="pt-5">
                    <span>&emsp;活動地圖</span>
                    <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0101430546406!2d121.54123031537893!3d25.033729844455443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd379a5ec97%3A0xedc006d25a9e35df!2z6LOH562W5pyDIOaVuOS9jeaVmeiCsueglOeptuaJgCDmlbjkvY3kurrmiY3ln7nogrLkuK3lv4M!5e0!3m2!1szh-TW!2stw!4v1573583218606!5m2!1szh-TW!2stw" width="550" height="450" frameborder="0" allowfullscreen=""></iframe></div>
            </div> */}
                            </section>
                        </Col>

                        {/* 報名 button */}
                        <Col sm={3}>
                            <div className="py-5 sticky-top events_sign_up_body">
                                <p>
                                    <a class="btn btn-outline-warning events_sign_up_btn d-flex justify-content-center align-items-center" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        立即報名
                    </a>
                                </p>
                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body events_card_height">
                                        <h4>NT$ {this.state.data.price}</h4>
                                        <br />
                                        <Button variant="secondary" onClick={() => this.handleClick(1)}>+</Button>
                                        {/* <button onClick={() => this.handleClick(1)}>+</button> */}
                                        <h1 className="events_total">{this.state.total}</h1>
                                        <Button variant="secondary" onClick={() => this.handleClick(-1)}>-</Button>
                                        {/* <button onClick={() => this.handleClick(-1)}>-</button> */}
                                        <br />
                                        <h5>共NT$ {this.state.total_price} </h5>
                                        <Button variant="warning">加入購物車</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <div className="events_Swiper_title">
                            <p>你可能會喜歡這些活動</p>
                        </div>

                        <Swiper_loop_mode />
                        <br />
                        <br />

                    </Row>
                </Container>

                <Footer />
            </>
        )
    }
}



export default latest_events_detail