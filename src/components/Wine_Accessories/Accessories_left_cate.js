import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//css樣式
import '../../style/Wine_accessories/Wine_accessories_index.scss'
//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

import $ from 'jquery'

class Accessories_left_cate extends React.Component {
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
            <div id="left_menu_cate" className="mt-4">
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
                  <div>酒杯</div>
                  <div>(4)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>葡萄酒杯</li>
                    <li>威士忌杯</li>
                    <li>白蘭地杯</li>
                    <li>雞尾酒杯</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>醒酒器</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>有過濾功能</li>
                    <li>無過濾功能</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>注酒器</div>
                  <div>(2)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>有瓶塞</li>
                    <li>無瓶塞</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>冰桶</div>
                  <div>(3)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>不鏽鋼</li>
                    <li>銀製</li>
                    <li>塑料</li>
                  </ul>
                </div>
              </li>
              <li class="">
                <div class="cate_1st d-flex justify-content-between">
                  <div>其他</div>
                  <div>(6)</div>
                </div>
                <div class="cate_2se">
                  <ul>
                    <li>開瓶器</li>
                    <li>止滴片</li>
                    <li>止滴環</li>
                    <li>溫度計</li>
                    <li>溫度環</li>
                    <li>不鏽鋼冰塊</li>
                  </ul>
                </div>
              </li>
              </ul>
          </div>
          </>
        )
    }
}
export default Accessories_left_cate