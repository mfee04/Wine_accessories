import React from 'react';
import Swiper from 'react-id-swiper';
import { Card, CardDeck,Button, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import '../../style/latest_events/Swiper_loop_mode.scss'
// https://react-id-swiper.ashernguyen.site/example/loop-mode-with-mutliple-slides-per-group

const Swiper_loop_mode = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Swiper {...params}>
          <Link to="/latest_events_detail">
                    <Card className="swiper_Card_border">
                        {/* <Card.Img variant="top" src="./images/Container_News/christmas-3021154_1920.jpg" /> */}
                        <Card.Img variant="top" src="http://placekitten.com/g/400/200" />
                        <Card.Body>
                            <Card.Title>2019｜11月智慧釀酒工作坊｜免費酒水暢2019｜11月智慧釀酒工作坊｜免費酒水暢飲飲2019｜11月智慧釀酒工作坊｜免費酒水暢飲</Card.Title>

                            <Card.Text>
                               <p>2020-01-04(六) ~ 2020-01-05(日)</p>             
                            </Card.Text>
                        </Card.Body>

                    </Card>
          </Link>

          <Link to="/latest_events_detail">
                    <Card className="swiper_Card_border">
                        <Card.Img variant="top" src="http://placekitten.com/g/400/200" />
                        <Card.Body>
                            <Card.Title>2019｜11月智慧釀酒工作坊｜免費酒水暢2019｜11月智慧釀酒工作坊｜免費酒水暢飲飲2019｜11月智慧釀酒工作坊｜免費酒水暢飲</Card.Title>

                            <Card.Text>
                               <p>2020-01-04(六) ~ 2020-01-05(日)</p>             
                            </Card.Text>
                        </Card.Body>

                    </Card>
          </Link>

          <Link to="/latest_events_detail">
                    <Card className="swiper_Card_border">
                        <Card.Img variant="top" src="http://placekitten.com/g/400/200" />
                        <Card.Body>
                            <Card.Title>2019｜11月智慧釀酒工作坊｜免費酒水暢2019｜11月智慧釀酒工作坊｜免費酒水暢飲飲2019｜11月智慧釀酒工作坊｜免費酒水暢飲</Card.Title>

                            <Card.Text>
                               <p>2020-01-04(六) ~ 2020-01-05(日)</p>             
                            </Card.Text>
                        </Card.Body>

                    </Card>
          </Link>
                {/* </Col> */}
      <div>Slide #1<img src="http://placekitten.com/g/400/200" /></div>
      <div>Slide #2<img src="http://placekitten.com/g/400/200" /></div>
      <div>Slide #3<img src="http://placekitten.com/g/400/200" /></div>
      <div>Slide #4<img src="http://placekitten.com/g/400/200" /></div>
      <div>Slide #5<img src="http://placekitten.com/g/400/200" /></div>
      <div>Slide #6<img src="http://placekitten.com/g/400/200" /></div>
    </Swiper>
  )
};
export default Swiper_loop_mode;