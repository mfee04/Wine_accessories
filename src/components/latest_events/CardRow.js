import React from 'react'
import { Card, CardDeck,Button, Row, Col,Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import '../../style/latest_events/CardRow.scss'
import $ from 'jquery'

class CardRow extends React.Component{
constructor(props){
    super(props)
    this.state = {
        // picture: this.props.picture,
        // activity_name: this.props.activity_name,
        // location: this.props.location,
        // Introduction: this.props.Introduction,
        // activity_start_Date: this.props.activity_start_Date,
        // activity_end_Date: this.props.activity_end_Date,
        // price: this.props.price,
        // key: this.props.key,
    }
   
}

componentDidMount() {
    $(function(){
        var len = 45; // 超過50個字以"..."取代
        $(".card-title").each(function(i){
            if($(this).text().length>len){
                $(this).attr("title",$(this).text());
                var text=$(this).text().substring(0,len-1)+"...";
                $(this).text(text);
            }
        });
    });
}

render(){
    console.log(this.props.Introduction)
    return(
       <>

    <Col xl={4} lg={6} md={6} sm={12} >
        <CardDeck style={{'height':'27rem'}}>
            {/* <Row> */}
            {/* ${this.props.key} */}
                    <Card className="events_Card_border">
                    <Link to={{pathname:`/latest_events_detail`,state:this.props}}>
                        <Card.Img  style={{'height':'10rem'}} variant="top" src={`http://localhost/bistro666/lib/images/activity/uploads/${this.props.picture}`} /> {/* $是樣板字串 塞變數用的 不是Jquery的$ */ }
                    </Link>
                        <Card.Body> 
                            <Card.Title>{this.props.activity_name}</Card.Title>
                            <Card.Text>
                            <p>{this.props.activity_start_Date} ~ {this.props.activity_end_Date}</p>
                            {/* {this.state.price} */}
                            {this.props.Introduction}
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to="/latest_events_detail">
                            <Button variant="outline-warning">熱銷中</Button>
                        </Link>
                        </Card.Footer>
                    </Card>
            
                {/* </Row> */}
         </CardDeck>
    </Col>
  
           
                {/* <Col xl={4} lg={6} md={6} sm={12} className='CardRow_padding_decrease'>
                    <Card className="events_Card_border">
                    <Link to="/latest_events_detail">
                        <Card.Img variant="top" src="./images/Container_News/christmas-3021154_1920.jpg" />
                    </Link>
                        <Card.Body>
                            <Card.Title>2019｜11月智慧釀酒工作坊｜免費酒水暢2019｜11月智慧釀酒工作坊｜免費酒水暢飲飲2019｜11月智慧釀酒工作坊｜免費酒水暢飲</Card.Title>
                            <Card.Text>
                            <p>2020-01-04(六) ~ 2020-01-05(日)</p>
                            「葡萄酒品飲入門」由專業的劉鉅堂老師以簡單卻正統的方式，帶領大家認識葡萄酒，課堂中也將教授大家葡萄酒的品嚐及保存技巧，讓對葡萄酒有興趣的朋友能循序漸進，對葡萄酒更有概念，進而增進享受葡萄酒的樂趣。
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to="/latest_events_detail">
                            <Button variant="outline-warning">熱銷中</Button>
                        </Link>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xl={4} lg={6} md={6} sm={12} className='CardRow_padding_decrease'>
                    <Card className="events_Card_border">
                    <Link to="/latest_events_detail">
                        <Card.Img variant="top" src="./images/Container_News/christmas-3021154_1920.jpg" />
                    </Link>
                        <Card.Body>
                            <Card.Title>熱帶風情的極致韻味</Card.Title>
                            <Card.Text>
                            <p>2020-01-04(六) 18:30 ~ 2020-01-05(日) 16:30</p>
                            醺吟．冬韻！【私藏酒窖】2019年終慶《Slainthe！醺吟十冬之曲》格蘭菲迪講座，特別邀請世界級咖啡烘豆冠軍、Fika Fika Café主理人陳志煌分享「Fika拾光！咖啡風味的無限可能」，搭配格蘭菲迪單一麥芽威士忌品酩會，期待在濃醇的酒香中，與您共享知性、感性交融的愉悅時光。
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to="/latest_events_detail">
                            <Button variant="outline-warning">熱銷中</Button>
                        </Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className='CardRow_padding_decrease'>
                    <Card className="events_Card_border">
                    <Link to="/latest_events_detail">
                        <Card.Img variant="top" src="./images/Container_News/christmas-3021154_1920.jpg" />
                    </Link>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            <p>2020-01-04(六) ~ 2020-01-05(日)</p>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to="/latest_events_detail">
                            <Button variant="outline-warning">熱銷中</Button>
                        </Link>
                        </Card.Footer>
                    </Card>
                </Col>


                <Col xl={4} lg={6} md={6} sm={12} className='CardRow_padding_decrease'>
                    <Card className="events_Card_border">
                    <Link to="/latest_events_detail">
                        <Card.Img variant="top" src="./images/Container_News/christmas-3021154_1920.jpg" />
                    </Link>
                        <Card.Body>
          
                            <Card.Title>2019｜11月智慧釀酒工作坊｜免費酒水暢2019｜11月智慧釀酒工作坊｜免費酒水暢飲飲2019｜11月智慧釀酒工作坊｜免費酒水暢飲</Card.Title>
           
                            <Card.Text>
                            <p>2020-01-04(六) ~ 2020-01-05(日)</p>
                            「葡萄酒品飲入門」由專業的劉鉅堂老師以簡單卻正統的方式，帶領大家認識葡萄酒，課堂中也將教授大家葡萄酒的品嚐及保存技巧，讓對葡萄酒有興趣的朋友能循序漸進，對葡萄酒更有概念，進而增進享受葡萄酒的樂趣。
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to="/latest_events_detail">
                            <Button variant="outline-warning">熱銷中</Button>
                        </Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className='CardRow_padding_decrease'>
                    <Card className="events_Card_border">
                    <Link to="/latest_events_detail">
                        <Card.Img variant="top" src="./images/Container_News/christmas-3021154_1920.jpg" />
                    </Link>
                        <Card.Body>
                            <Card.Title>熱帶風情的極致韻味</Card.Title>
                            <Card.Text>
                            <p>2020-01-04(六) ~ 2020-01-05(日)</p>
                            醺吟．冬韻！【私藏酒窖】2019年終慶《Slainthe！醺吟十冬之曲》格蘭菲迪講座，特別邀請世界級咖啡烘豆冠軍、Fika Fika Café主理人陳志煌分享「Fika拾光！咖啡風味的無限可能」，搭配格蘭菲迪單一麥芽威士忌品酩會，期待在濃醇的酒香中，與您共享知性、感性交融的愉悅時光。
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to="/latest_events_detail">
                            <Button variant="outline-warning">熱銷中</Button>
                        </Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className='CardRow_padding_decrease'>
                    <Card className="events_Card_border">
                    <Link to="/latest_events_detail">
                        <Card.Img variant="top" src="./images/Container_News/christmas-3021154_1920.jpg" />
                    </Link>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            <p>2020-01-04(六) ~ 2020-01-05(日)</p>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to="/latest_events_detail">
                            <Button variant="outline-warning">熱銷中</Button>
                        </Link>
                        </Card.Footer>
                    </Card>
                </Col>            */}
                
            {/* </Row> */}
     </>
    )
  }
}



export default CardRow