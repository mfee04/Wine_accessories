import React, { Component } from "react";
import {
  ButtonToolbar,
  DropdownButton,
  Dropdown,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import RangeSlider from "./RangeSlider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class Dining_bar_filter extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], city: "", type: [], getData: true };
  }

  mysrc = (value) => {
    switch (value) {
      case "日式":
        return "images/dining_bar/japan.svg";
      case "西式":
        return "images/dining_bar/western.svg";
      case "義式":
        return "images/dining_bar/pizza.svg";
      case "漢堡店":
        return "images/dining_bar/hamburger.svg";
      case "夜店舞廳":
        return "images/dining_bar/dancing.svg";
      case "lounge_bar":
        return "images/dining_bar/glass.svg";
      case "運動酒吧":
        return "images/dining_bar/dart.svg";
      default:
        return "";
    }
  };

  render() {
    let arr = [
      "日式",
      "西式",
      "義式",
      "漢堡店",
      "夜店舞廳",
      "lounge_bar",
      "運動酒吧"
    ];
    let place_arr = [
      "台北市",
      "新北市",
      "桃園市",
      "新竹市",
      "台中市",
      "台南市",
      "高雄市"
    ];

    return (
      <>
        {/* 手機板篩選 */}
        <div className="m_filter">
          <FormControl className="place_formControl">
            <InputLabel htmlFor="grouped-native-select">選擇地區</InputLabel>
            <Select
              native
              defaultValue=""
              input={<Input id="grouped-native-select" />}
              onChange={(event) => this.props.doFiliter(event.target.value)}
            >
              {place_arr.map((place) => {
                return <option value={place}>{place}</option>;
              })}
            </Select>
          </FormControl>
          <List dense>
            {arr.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem key={value} button>
                  <ListItemAvatar>
                    <Avatar alt={`${value}`} src={this.mysrc(value)} />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={`Line item ${value}`} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      onChange={() => this.props.doFiliter(value)}
                      checked={this.props.type.includes(value) === true}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <RangeSlider
            handleChange={this.props.priceFilter}
            price={this.props.price}
          />
        </div>
        {/* 網頁版篩選 */}
        <div className="web-filter">
          <Dropdown>
            <DropdownButton
              id="dropdown-basic-button"
              title={this.props.city ? this.props.city : "選擇地區"}
            >
              <Dropdown.Item onClick={() => this.props.doFiliter("台北市")}>
                台北市
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.doFiliter("新北市")}>
                新北市
              </Dropdown.Item>
            </DropdownButton>
          </Dropdown>
          {/* 標籤button */}
          <>
            <ButtonToolbar>
              <div className="d-flex">
                {arr.map((value) => {
                  return (
                    <ToggleButtonGroup type="checkbox">
                      <ToggleButton
                        onClick={() => this.props.doFiliter(`${value}`)}
                      >
                        {`${value}`}
                        <img
                          alt="日式餐廳"
                          src={this.mysrc(value)}
                          className="dining_bar_icon"
                        />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  );
                })}
              </div>
            </ButtonToolbar>
          </>
        </div>
      </>
    );
  }
}

export default Dining_bar_filter;
