import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//css樣式
import '../../style/Wine_Tasting/Wine_Tasting_index.scss'
//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

import $ from 'jquery'

class Tasting_left_cate extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {
      // 篩選類別第二層動畫
      $(".cate_1st").click(function(){
        $(this).parent().find(".cate_2se").slideToggle()
      })
    }

    render() {
        return (
          <>
            <div id="left_menu_cate" className="mt-2">
              <div className="menu_cate_tit">
                <p>CATEGORIES</p>
                <div className="plus-minus-cate">
                  <img src="../images/Wine_Accessories/plus.png" className="plus-cate" alt="" />
                  <img src="../images/Wine_Accessories/minus.png" className="minus-cate" alt="" />
                </div>
              </div>
              <ul>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>冰酒</div>
                  <div>(4)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>冰酒1</li>
                    <li>冰酒2</li>
                    <li>冰酒3</li>
                    <li>冰酒4</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>葡萄酒</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>葡萄酒1</li>
                    <li>葡萄酒2</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>威士忌</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>達文西密碼的上面是什麼</li>
                    <li>達文西帳號</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>氣泡酒</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>川普跌倒會變成什麼</li>
                    <li>三普</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>法國香檳</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>有一個麵包，走著走著肚子餓了</li>
                    <li>，於是就把自己吃了。</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>甜白酒</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>我想不到笑話了</li>
                    <li>哈哈</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>白酒</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>我想不到笑話了</li>
                    <li>哈哈</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>紅酒</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>我想不到笑話了</li>
                    <li>哈哈</li>
                  </ul>
                </div>
              </li>
              </ul>
          </div>
          </>
        )
    }
}
export default Tasting_left_cate