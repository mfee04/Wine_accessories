import React from 'react'

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//css樣式

//分頁連結
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

import $ from 'jquery'

// TODO
// value的值要用state去抓
// https://tinyurl.com/y2e68fpf

class Accessories_left_sort extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
      // SORT選項中：
      // 價格由低至高&由高至低的CHECKBOX不可以同時被點選（邏輯錯誤）
      $("#price_low").click(function() {
        if(this.checked) {
          $("#price_high").attr("disabled","disabled")
          $("label[for='price_high']").css("color","var(--frame-color)")
        }else{
          $("#price_high").removeAttr("disabled")
          $("label[for='price_high']").css("color","var(--text-color)")
        }
      });
      $("#price_high").click(function() {
        if(this.checked) {
          $("#price_low").attr("disabled","disabled")
          $("label[for='price_low']").css("color","var(--frame-color)")
        }else{
          $("#price_low").removeAttr("disabled")
          $("label[for='price_low']").css("color","var(--text-color)")
        }
      });
    }

    render() {
        return (
          <>
          <div id="left_menu_sort">
            <div className="menu_menu_tit">
              <p>SORT</p>
              <div className="plus-minus-sort">
                <img src="../images/Wine_Accessories/plus.png" className="plus-sort" alt="" />
                <img src="../images/Wine_Accessories/minus.png" className="minus-sort" alt="" />
              </div>
            </div>
            <div className="sort_option">
              <input type="checkbox" name="best" id="best" value="best" />
              <label for="best">最佳推薦</label>
            </div>
            <div className="sort_option">
              <input type="checkbox" name="hot" id="hot" value="hot" />
              <label for="hot">人氣熱門</label>
            </div>
            <div className="sort_option">
              <input
                type="checkbox"
                name="price_low"
                id="price_low"
                value="price_low"
              />
              <label for="price_low">價格（低至高）</label>
            </div>
            <div className="sort_option">
              <input
                type="checkbox"
                name="price_high"
                id="price_high"
                value="price_high"
              />
              <label for="price_high">價格（高至低）</label>
            </div>
            <div className="sort_option">
              <input 
                type="checkbox" 
                name="combo" 
                id="combo" 
                value="combo" 
                />
              <label for="combo">精選組合</label>
            </div>
          </div>
          </>
        )
    }
}
export default Accessories_left_sort