import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import "../../style/Dining_bar/Dining_bar_list.css";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoWindow,
  InfoBox
} from "@react-google-maps/api";

import { ReactComponent as Heart } from "../../images/like_white.svg";
import Map from "./Map.json";
import {
  Card,
  Button,
  ButtonToolbar,
  DropdownButton,
  Dropdown,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import Dining_bar_detail from "./Dining_bar_detail";
import Dining_bar_filter from "./Dining_bar_filter";
// import { isTuesday } from "date-fns";

// import StoreList from "./page/StoreList";

class Dining_bar_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idtext: "",
      animation: "",
      latlng: { lat: 25.0411082, lng: 121.5492372 },
      getData: true,
      data: [],
      alldata: [],
      city: "",
      type: [],
      mylike: false,
      filtertoggle: true,
      price: [300, 2000]
    };
  }

  handleInfo = (arr) => () => {
   
    this.setState({
      latlng: {
        lat: parseFloat(arr.latlng.split(",")[0]),
        lng: parseFloat(arr.latlng.split(",")[1])
      },
      idtext: arr.sid
    });
    //   mapinfo(event)
    // );
    // let info = document.getElementsByClassName(arr.name)[0];
    // info.hidden = !info.hidden;
  };

  showInfo = (e) => {
    this.setState({
      hover: true 
    });
  };

  boundmarker = (arr) => (e) => {
    this.setState(
      {
        latlng: {
          lat: parseFloat(arr.latlng.split(",")[0]),
          lng: parseFloat(arr.latlng.split(",")[1])
        },
        animation: 1,
        idtext: arr.sid
      },
    );
  };

  stopbound = (arr) => (event) => {
    this.setState(
      {
        animation: "",
        idtext: ""
      },
    );
  };

  //篩選地區或餐廳type(只選單一的狀況)
  searchPlace = async (value) => {
    //控制

    try {
      const response = await fetch(
        `http://localhost:3000/Dining_pub_inquiry/` + value,
        {
          method: "GET"
        }
      );
      const json = await response.json();

      this.setState(
        {
          city: value.indexOf("市") > 0 ? value : this.state.city, //確定送進來的是地區才存狀態
          type: value.indexOf("市") > 0 ? this.state.type : value, //確定送進來的是餐廳type才存狀態
          getData: !this.state.getData,
          data: json.info,
          alldata: json.info
        },
      );
      if (!response.ok) {
        throw Error(response);
      }
    } catch (error) {
      console.log(error);
    }

    // this.doFiliter(value);
  };

  // 篩選地區跟餐廳type(複選的狀況)
  doFiliter = (...[value]) => {
    // console.log(...[value]);

    //如果傳得值是餐廳類型
    if (value.indexOf("市") < 0 && this.state.city === "") {
      //傳的類型如果重複把陣列裡重複的值(餐廳類型)丟出，不然就新加入陣列
      if (this.state.type.includes(value)) {
        let a = this.state.type.filter((element) => {
          return value !== element;
        });
        this.searchPlace(a);
      } else {
        this.searchPlace([...[...this.state.type], value]);
      }
      return;
    }
    //如果先傳地區(單選)時
    if (value.indexOf("市") > 0 && this.state.type.length === 0) {
      this.searchPlace(value);
      return;
    }
    //如果先傳餐廳類型再傳地區時
    if (
      value !== false &&
      (this.state.type.length !== 0 || this.state.city !== "")
    ) {
      //同第一個判斷確認state裡面已有餐廳狀態要排除
      //然後裡面用"市"確定傳進來是地點還是餐廳類型，確定type是有排除或是要新增進陣列
      let myfilter, type;
      if (this.state.type.includes(value)) {
        myfilter = this.state.type.filter((element) => {
          return value !== element;
        });
        type = value.indexOf("市") > 0 ? this.state.type : [...myfilter];
      } else {
        myfilter = this.state.type.map((element) => {
          return element;
        });
        type = value.indexOf("市") > 0 ? this.state.type : [value, ...myfilter];
      }

      let place = value.indexOf("市") > 0 ? value : this.state.city;
      try {
        fetch(
          `http://localhost:3000/Dining_pub_inquiry/` + place + "/" + type,
          {
            method: "GET"
          }
        )
          .then((response) => response.json())
          .then((json) =>
            this.setState({
              city: place, //確定送進來的是地區才存狀態
              type: type, //確定送進來的是餐廳type才存狀態
              getData: !this.state.getData,
              data: json,
              alldata: json
            })
          );
      } catch (error) {
        console.log(error);
      }
    }
  };
  //我的最愛
  love = (event) => {
    // event.stopPropagation();
    this.setState({ mylike: !this.state.mylike });
    // fetch的網址 /Dining_bar_favorite
    try {
      fetch("http://localhost:3000/Dining_bar_favorite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: "1", storeId: this.state.idtext })
      })
        .then((res) => res.json())
        .then((json) => {
        });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    if (this.state.getData) {
      this.searchPlace("");
    }
  }
  //用路徑傳遞商家詳細資料route
  console = (props) => (value) => {
    this.props.history.state = props;
  };
  // 手機板篩選toggle
  showfilter = () => {
    let m_filter = document.getElementsByClassName("m_filter")[0];
    let web_filter = document.getElementsByClassName("web-filter")[0];

    if (this.state.filtertoggle) {
      m_filter.style.display = "flex";
      web_filter.style.display = "none";
      // place_filter.style.display = "block";
    } else {
      m_filter.style.display = "";
      web_filter.style.display = "flex";
      // place_filter.style.display = "";
    }
    this.setState({ filtertoggle: !this.state.filtertoggle });
  };

  // 判斷今天日期跟資料庫的時間
  handleTime = (arr) => {
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
        return "未提供";
    }
  };

  priceFilter = (event, value) => {
    // let myfilter = (value) => {   };
    let price_arr = this.state.alldata.slice();
    let a = price_arr.filter((element) => {
      return value[0] < +element.how_much && +element.how_much < value[1];
    });

    this.setState(
      {
        data: a,
        price: value
      }
    );
  };

  render() {
    let k = 0;
    return (
      <Router>
        <div className="d-flex m-1 filter-wrap">
          <Button className="filter_btn" onClick={this.showfilter}>
            <img
              className="dining_bar_icon"
              src="images/dining_bar/filter.svg"
              alt="篩選"
            />
            <span>篩選</span>
          </Button>
          <Dining_bar_filter
            doFiliter={this.doFiliter}
            city={this.state.city}
            data={this.state.data}
            type={this.state.type}
            price={this.state.price}
            priceFilter={this.priceFilter}
          />
        </div>
        <div className="maplist">
          {/* 左邊card */}
          <div className="card-wrap">
            {this.state.data.map((arr, i) => (
              <Card
                key={i}
                onMouseLeave={this.stopbound(arr)}
                onMouseEnter={this.boundmarker(arr)}
              >
                <Card.Img
                  key={(k += 2)}
                  variant="top"
                  src={`images/${arr.preview_pic}`}
                  style={{ width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{arr.name}</Card.Title>
                  <h6>{arr.address}</h6>
                  <h6>營業時間: {this.handleTime(arr)}</h6>
                  <Button
                    variant="primary"
                    as={Link}
                    to={{
                      pathname: `/Dining_bar_detail/${arr.sid}`,
                      state: arr
                    }}
                    onClick={this.console(arr)}
                  >
                    {/* <Link to="/Dining_bar_detail" /> */}
                    預約店家
                  </Button>
                  <span> {arr.how_much}</span>
                </Card.Body>
              </Card>
            ))}
          </div>
          <Switch>
            <Route
              path="/Dining_bar_detail/:id?"
              exact
              component={Dining_bar_detail}
            />
          </Switch>

          {/* 右邊地圖 */}
          <LoadScript
            key={k++}
            id="script-loader"
            googleMapsApiKey="AIzaSyAadMvzelzRIjMSAZyGh8UoUpckWI-8Q6w"
            // {...other props}
          >
            <GoogleMap
              id="marker-example"
              mapContainerStyle={{
                height: "100vh",
                width: "60%",
                margin: "36px 0 0 16px"
              }}
              zoom={8}
              center={
                this.state.latlng || { lat: 25.0361027, lng: 121.5474666 }
              }
              options={{ styles: Map }}
            >
              <MarkerClusterer
                key={k++}
                options={{
                  imagePath:
                    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
                }}
                minZoom={5}
                onClick={this.showInfo}
              >
                {(clusterer) =>
                  this.state.data.map((arr, i) => (
                    <>
                      <Marker
                        key={arr.sid}
                        animating={true}
                        animation={
                          arr.sid === this.state.idtext
                            ? this.state.animation
                            : ""
                        }
                        // animation="google.maps.Animation.BOUNCE"
                        clusterer={clusterer}
                        position={{
                          lat: parseFloat(arr.latlng.split(",")[0]),
                          lng: parseFloat(arr.latlng.split(",")[1])
                        }}
                        title={arr.name}
                        onClick={this.handleInfo(arr)}
                      />
                      <InfoBox
                        position={{
                          lat: parseFloat(arr.latlng.split(",")[0]),
                          lng: parseFloat(arr.latlng.split(",")[1])
                        }}
                        options={{
                          isHidden:
                            this.state.idtext === arr.sid ? false : true,
                          boxClass: arr.name,
                          disableAutoPan: true,
                          enableEventPropagation: true
                        }}
                      >
                        <Card key={arr.sid} style={{ width: "15rem" }}>
                          <Card.Img
                            variant="top"
                            src={`images/${arr.preview_pic}`}
                          />
                          <Card.Body key={arr.sid}>
                            <Card.Title variant="bottom" key={k++}>
                              {arr.name}
                            </Card.Title>

                            {arr["日式"] === "1" ? (
                              <img
                                alt="日式餐廳"
                                src="images/dining_bar/japan.svg"
                                className="dining_bar_icon"
                              />
                            ) : (
                              ""
                            )}
                            {arr["西式"] === "1" ? (
                              <img
                                alt="西式餐廳"
                                src="images/dining_bar/western.svg"
                                className="dining_bar_icon"
                              />
                            ) : (
                              ""
                            )}
                            {arr["義式"] === "1" ? (
                              <img
                                alt="義式餐廳"
                                src="images/dining_bar/pizza.svg"
                                className="dining_bar_icon"
                              />
                            ) : (
                              ""
                            )}
                            {arr["漢堡店"] === "1" ? (
                              <img
                                alt="漢堡店"
                                src="images/dining_bar/hamburger.svg"
                                className="dining_bar_icon"
                              />
                            ) : (
                              ""
                            )}
                            {arr["lounge_bar"] === "1" ? (
                              <img
                                alt="lounge_bar"
                                src="images/dining_bar/glass.svg"
                                className="dining_bar_icon"
                              />
                            ) : (
                              ""
                            )}
                            {arr["運動酒吧"] === "1" ? (
                              <img
                                alt="運動酒吧"
                                src="images/dining_bar/dart.svg"
                                className="dining_bar_icon"
                              />
                            ) : (
                              ""
                            )}

                            {arr["夜店舞廳"] === "1" ? (
                              <img
                                alt="夜店舞廳"
                                src="images/dining_bar/dancing.svg"
                                className="dining_bar_icon"
                              />
                            ) : (
                              ""
                            )}
                            {arr["居酒屋"] === "1" ? (
                              <img
                                alt="居酒屋"
                                src="images/dining_bar/barbecue.svg"
                                className="dining_bar_icon"
                              />
                            ) : (
                              ""
                            )}
                            {/* <Card.Link href="#" key={arr.sid}>
                                  Card Link
                                </Card.Link> */}
                            <Heart
                              className="dining_bar_icon"
                              alt="favorite"
                              style={{ cursor: "pointer" }}
                              onClick={this.love}
                              fill={this.state.mylike ? "#ff0000" : "#ffffff"}
                              stroke="black"
                            />
                          </Card.Body>
                        </Card>
                      </InfoBox>
                    </>
                  ))
                }
              </MarkerClusterer>
            </GoogleMap>
          </LoadScript>
        </div>
      </Router>
    );
  }
}

export default withRouter(Dining_bar_list);
