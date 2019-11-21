import React from 'react'
import $ from 'jquery'
import AOS from 'aos';
// import Markdown from '../Blog/Markdown'


//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//css樣式
import '../../style/Blog/css/style.css'
import '../../style/Blog/css/aos.css';


//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

class Blog_article_info extends React.Component {
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
        <Row>
            <Col className="order-lg-last ftco-animate">
                <div>
                    <div className="mb-3" data-aos='fade-up'>
                        <Link to="#" className="btn btn-light ftco-animate"><i className="fas fa-folder-open mr-2"></i>收藏</Link>
                        <Link to="#" className="btn btn-light ftco-animate"><i className="fas fa-share-alt mr-2"></i>分享</Link>
                    </div>
                    <p>{this.props.content}</p>
                    
                    <div className="tag-widget post-tag-container mt-4" data-aos='fade-up'>
                        <div className="tagcloud">
                            <i className="fa fa-tags" style={{color:'rgba(0, 0, 0, 0.8)'}}></i>
                            <span style={{color:'rgba(0, 0, 0, 0.8)'}}>標籤：</span>
                            <Link to="#" className="tag-cloud-link">解酒</Link>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <h2>五種食物幫助你解酒，咖啡不能亂喝！</h2>
                    <div className="mb-3" data-aos='fade-up'>
                        <Link to="#" className="btn btn-light ftco-animate"><i className="fas fa-folder-open mr-2"></i>收藏</Link>
                        <Link to="#" className="btn btn-light ftco-animate"><i className="fas fa-share-alt mr-2"></i>分享</Link>
                    </div>
                    <p>現在人習慣快節奏的生活，許多上班族往往起床後就會來杯香醇的咖啡醒腦，如果前一天還因為大量應酬而宿醉的話，更有人喜歡灌下比平常更多的咖啡來刺激提神，但是其實咖啡根本一點都不解酒，甚至還可能誘發出高血壓！</p>
                    <p><img src={('../images/Blog/image1.jpg')} alt="Background" className="img-fluid" /></p>
                    <p>網路上有一種謬論指出，因為咖啡因可以促進肝、腎臟機能，因此如果大量喝酒之後喝咖啡，就能促進酒精轉化成的乙醛酸化，進而分解出二氧化硫和水，有助於快速醒酒，但其實這是訛傳！如果想要解酒，絕對不要碰咖啡。這是因為酒精下肚之後，就會快速被人體的消化系統吸收，接著就會進入血液循環系統，逐漸影響你的胃腸、心臟、肝腎、大腦和內分泌系統，並且導致體內的醣、蛋白質跟脂肪代謝紊亂，而其中受影響最嚴重的，就是人體的大腦。此時如果喝下咖啡，咖啡中的咖啡因，反而會強烈刺激中樞神經和肌肉，加快新陳代謝。讓大腦從極度抑制轉變成極度興奮，同時刺激血管擴張，加快血液循環，會大大地增加心血管的負擔。這樣一來，酒後接著喝咖啡，對人體造成的損害反而比單純喝酒還要大得多，嚴重的話還會誘發高血壓。
                        專家建議，如果是飲用30度以上的白酒超過50ml的人，在酒後一個小時內盡量不要喝咖啡；喝了少量酒的人，咖啡最好不要超過一杯200ml的量，而如果你是喝葡萄酒的話，在酒後的三小時之內，也不要喝咖啡。</p>
                    <p>那到底什麼食物可以解酒呢？以下介紹五種：</p> 
                    <h3>1. 雞蛋</h3>
                    <p>雞蛋中富含半胱氨酸，具有解毒作用。雞蛋中豐富的B族維生素可緩解宿醉。</p>
                    <h3>2. 生薑</h3>
                    <p>酒後吃薑可以刺激消化系統，也可以緩解脹氣或是消化不良等症狀。</p>
                    <h3>3. 番茄汁</h3>
                    <p>這應該是最多人聽過的解酒方法了，就連電影《天生一對》中也有演出這個橋段。番茄汁中富含糖分，可以補充因為分解酒精而降低的血糖，減輕酒後頭痛的不適感，讓人不會因為血糖過低而感到疲倦乏力。</p>
                    <h3>4. 香蕉</h3>
                    <p>喝酒容易利尿，但反而讓身體缺水，血鉀水平降低，就容易導致血壓升高、肌肉無力，此時吃香蕉的話除了能夠補充鉀之外，還能增加血糖濃度。</p>
                    <h3>5. 蘆筍</h3>
                    <p>喝酒後吃蘆筍可以護肝。這是因為蘆筍可以提高分解酒精的多種酶，減輕宿醉狀態，同時保護肝臟細胞免受酒精侵害。</p>
                    <div className="tag-widget post-tag-container mt-4" data-aos='fade-up'>
                        <div className="tagcloud">
                            <i className="fa fa-tags" style={{color:'rgba(0, 0, 0, 0.8)'}}></i>
                            <span style={{color:'rgba(0, 0, 0, 0.8)'}}>標籤：</span>
                            <Link to="#" className="tag-cloud-link">解酒</Link>
                        </div>
                    </div>
                </div> */}

                <div className="pt-5 mt-5" data-aos='fade-up'>
                    <h3 className="mb-5">1 Comments</h3>
                    <ul className="comment-list">
                        <li className="comment">
                            <div className="vcard bio">
                                <img src={('../images/Blog/user.jpg')} alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                                <h3>John</h3>
                                <div className="meta">November 11, 2019 at 9:21pm</div>
                                <p>Bistro最棒!!!!</p>
                                <p><Link to="#" className="reply">Reply</Link></p>
                            </div>
                            <ul className="children">
                                <li className="comment">
                                    <div className="vcard bio">
                                        <img src={('../images/Blog/admin.jpg')} alt="Image placeholder" />
                                    </div>
                                    <div className="comment-body">
                                        <h3>Bistro</h3>
                                        <div className="meta">November 11, 2019 at 9:25pm</div>
                                        <p>謝謝您的支持，這將是我們最大的進步動力!!!!</p>
                                        <p><Link to="#" className="reply">Reply</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                        
                <div className="comment-form-wrap pt-5" data-aos='fade-up'>
                    <h3 className="mb-5">Leave a comment</h3>
                    <form action="#" className="p-5 bg-light">
                        <div className="form-group">
                            <label for="name">Name *</label>
                            <input type="text" className="form-control" id="name" />>
                        </div>
                        <div className="form-group">
                            <label for="email">Email *</label>
                            <input type="email" className="form-control" id="email" />>
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                        </div>
                    </form>
                </div>
            </Col>
        </Row>
      </>
    )
  }
}
export default Blog_article_info