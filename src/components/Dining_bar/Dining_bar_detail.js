import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../style/Dining_bar/Dining_bar_detail.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Dining_bar_detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [this.props.location.state],
      startDate: new Date(),
      people: 0
    };
    // console.log(props);
  }

  //畫面載入時把父層的資料存在子層的state裡
  //設置localstorage
  componentDidMount() {
    if (this.state.data.includes(undefined)) {
      //判斷今天重新整理時狀態清空(undefined)就到localstorage裡拿
      let info = JSON.parse(localStorage.getItem("barDetail"));
      this.setState({ data: info });
      // const barData = localStorage.getItem("barDetail")
      //   ? JSON.parse(localStorage.getItem("barDetail"))
      //   : {
      //       barDetail: []
      //     };
    } else {
      //一開始進來就設置localStorage
      localStorage.setItem("barDetail", JSON.stringify(this.state.data));
    }
  }
  //時間掛件的設定
  setHours = () => (new Date(), 0); //設定可以預約的時間，資料庫撈出來後切字串
  setMinutes = () => (new Date(), 30);
  TimeChange = (date) => {
    this.setState({
      //這邊可以設資料庫來存人數跟時間，再寫進資料庫
      startDate: date
    });
  };
  PeopleChange = (num) => {
    this.setState({ people: num });
  };

  handleClose = () => {
    console.log(this.props);
  };
  //加入購物車
  addCart = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(this.state.startDate);
    console.log(this.state.people);
    console.log(this.props);
    //todo 撈localstorage的會員sid
    let storeId = this.props.match.params;
    try {
      const response = await fetch(`http://localhost:3000/Dining_bar_detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeId,
          rv_detail: {
            time: this.state.startDate.toLocaleString({
              timeZone: "Asia/Taipei"
            }),
            p_num: this.state.people
          }
        })
      });
      const json = await response.json();
      console.log(json);
      localStorage.setItem("barCart", JSON.stringify(json));

      if (!response.ok) {
        throw Error(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // 營業時間
  handleTime = (arr) => {
    // console.log(arr);
    let today = new Date().getDay();
    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    // console.log(JSON.stringify(arr));
    // console.log(JSON.stringify(arr.Monday));

    switch (week[today]) {
      case "Monday":
        return `星期一:${arr.Monday}`;
      case "Tuesday":
        return `星期二:${arr.Tuesday}`;
      case "Wednesday":
        return `星期三:${arr.Wednesday}`;
      case "Thursday":
        return `星期四:${arr.Thursday}`;
      case "Friday":
        return `星期五:${arr.Friday}`;
      case "Saturday":
        return `星期六:${arr.Saturday}`;
      case "Sunday":
        return `星期日:${arr.Sunday}`;
      default:
        // console.log(`${arr}${[week[today]]}`);
        return "未提供";
    }
  };

  render() {
    // console.log(this.state);
    // console.log(this.props);
    // if (this.state.data !== [undefined]) {
    //   localStorage.setItem("barDetail", JSON.stringify(this.state.data));

    // const barData = localStorage.getItem("barDetail")
    //   ? JSON.parse(localStorage.getItem("barDetail"))
    //   : {
    //       barDetail: []
    //     };
    // console.log(barData);
    // this.setState({ data: barData });
    // }

    console.log(this.state.data);
    if (this.state.data.includes(undefined)) return <p>查無資料</p>;
    return (
      <div className="canvas animated delay-1s bounceInLeft">
        <div className="d_container">
          <Button
            as={Link}
            to={{
              pathname: `/`
            }}
            onClick={this.handleClose}
            className="close_btn"
          >
            <img
              src="/images/dining_bar/cancel.svg"
              alt="關閉"
              className="dining_bar_icon"
            />
            <p>關閉</p>
            {/* todo fontawsome 關閉icon */}
          </Button>

          {/* 商品細節資訊  */}
          {this.state.data.map((arr, i) => (
            <>
              <div className="d-flex justify-content-center">
                <img
                  src={"images/" + arr.preview_pic}
                  alt="店面照片"
                  style={{ width: "80%" }}
                />
              </div>
              <ul>
                <li className="detail_info justify-content-center">
                  <div className="info_des ">{arr.name}</div>
                </li>
                <li className="detail_info">
                  <div className="info_title">電話：</div>

                  <div className="info_des">{arr.phone}</div>
                </li>
                <li className="detail_info">
                  <div className="info_title">地址：</div>
                  <div className="info_des">{arr.address}</div>
                </li>
                <li className="detail_info d-flex">
                  <div className="info_title" style={{ flexShrink: 0 }}>
                    類型：
                  </div>
                  {arr["日式"] === "1" ? (
                    <img
                      alt="日式餐廳"
                      title="日式餐廳"
                      src="images/dining_bar/japan.svg"
                      className="dining_bar_icon"
                    />
                  ) : (
                    ""
                  )}
                  {arr["西式"] === "1" ? (
                    <img
                      alt="西式餐廳"
                      title="西式餐廳"
                      src="images/dining_bar/western.svg"
                      className="dining_bar_icon"
                    />
                  ) : (
                    ""
                  )}
                  {arr["義式"] === "1" ? (
                    <img
                      alt="義式餐廳"
                      title="義式餐廳"
                      src="images/dining_bar/pizza.svg"
                      className="dining_bar_icon"
                    />
                  ) : (
                    ""
                  )}
                  {arr["漢堡店"] === "1" ? (
                    <img
                      alt="漢堡店"
                      title="漢堡店"
                      src="images/dining_bar/hamburger.svg"
                      className="dining_bar_icon"
                    />
                  ) : (
                    ""
                  )}
                  {arr["lounge_bar"] === "1" ? (
                    <img
                      alt="lounge_bar"
                      title="lounge_bar"
                      src="images/dining_bar/glass.svg"
                      className="dining_bar_icon"
                    />
                  ) : (
                    ""
                  )}
                  {arr["運動酒吧"] === "1" ? (
                    <img
                      alt="運動酒吧"
                      title="運動酒吧"
                      src="images/dining_bar/dart.svg"
                      className="dining_bar_icon"
                    />
                  ) : (
                    ""
                  )}
                  {arr["夜店舞廳"] === "1" ? (
                    <img
                      alt="夜店舞廳"
                      title="夜店舞廳"
                      src="images/dining_bar/dancing.svg"
                      className="dining_bar_icon"
                    />
                  ) : (
                    ""
                  )}
                  {arr["居酒屋"] === "1" ? (
                    <img
                      alt="居酒屋"
                      title="居酒屋"
                      src="images/dining_bar/barbecue.svg"
                      className="dining_bar_icon"
                    />
                  ) : (
                    ""
                  )}
                </li>
                <div style={{ padding: 10, marginLeft: 20 }}>
                  <h6>營業時間: {this.handleTime(arr)}</h6>

                  <h6>
                    特殊服務:
                    {console.log(arr.service)}
                    {arr.service === " "
                      ? "無"
                      : arr.service.replace(/\"/g, " ")}
                  </h6>
                </div>
                {/* <li className="detail_info">
                    <div className="info_title">價格：</div>
                    <div className="info_des">
                      {this.state.data.how_much
                        ? this.state.data.how_much
                        : "未提供"}
                    </div>
                  </li> */}
                <form className="ml-3 myform">
                  {/* <li className="detail_info"> */}
                  <select className="detail" onChange={this.PeopleChange}>
                    <option value="">--請選擇人數--</option>
                    <option value="1">1位</option>
                    <option value="2">2位</option>
                    <option value="3">3位</option>
                    <option value="4">4位</option>
                    <option value="5">5位</option>
                    <option value="6~10">6~10位</option>
                  </select>
                  {/* </li> */}
                  <li className="detail_info">
                    <div>預約時間:</div>
                  </li>
                  <DatePicker
                    className="detail"
                    selected={this.state.startDate}
                    onChange={this.TimeChange}
                    showTimeSelect
                    minTime={this.setHours(this.setMinutes(new Date(), 0), 17)}
                    maxTime={this.setHours(this.setMinutes(new Date(), 30), 12)}
                    dateFormat="yyyy/MM/dd, h:mm aa"
                  />
                  <li className="detail_info">
                    <div className="info_title">優惠售價：</div>
                    <div className="info_des">
                      <span className="ml-3">
                        todo 後端處理好價格後丟出
                        <p className="member_price"></p>
                      </span>
                    </div>
                  </li>
                  <button className="add_cart_btn" onClick={this.addCart}>
                    加入購物車
                  </button>
                </form>
              </ul>
            </>
          ))}
          {/* <div className="social_icon d-flex justify-content-between mt-4">
              <button className="btn add_cart_btn">
                <img src="icon-cart_brown.png" alt="" />
                加入詢價車
              </button>
              <button className="btn add_like_btn">
                <img src="icon-like_orange.png" alt="" />
                加入最愛
              </button>
              <div className="share_text d-flex align-items-center">
                分享：
                <div className="share_icon d-flex">
                  <img src="icon_fb.svg" alt="" />
                  <img src="icon_line.svg" alt="" />
                </div>
              </div>
            </div> */}
        </div>
      </div>
    );
  }
}

export default Dining_bar_detail;
