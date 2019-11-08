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

class Accessories_left_priceSlider extends React.Component {
    constructor() {
        super()
    }
    //JQ放這
    componentDidMount() {
      // $("#price-slider").slider({
      //   range: true,
      //   min: 100,
      //   max: 5000,
      //   values: [800, 3000],
      //   slide: function(event, ui) {
      //     console.log(ui);
      //     $("#price-range").text("$" + ui.values[0] + " - $" + ui.values[1]);
      //   }
      // });
      // $("#price-range").text(
      //   "$" +
      //     $("#price-slider").slider("values", 0) +
      //     " - $" +
      //     $("#price-slider").slider("values", 1)
      // );
    }

    render() {
        return (
          <>
          <div id="left_menu_price">
            <div className="price-area d-flex justify-content-around align-items-center">
              <div className="price-text">PRICE</div>
              <div id="price-range"></div>
            </div>
            <div id="price-slider" className="mt-2"></div>
          </div>
          </>
        )
    }
}
export default Accessories_left_priceSlider