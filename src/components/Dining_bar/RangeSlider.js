import React from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function valuetext(value) {
  // console.log(value)
  return value;
}

export default function RangeSlider(props) {
  // const classes = useStyles();
  // const [value, setValue] = React.useState([300, 2000]);
  // console.log(props);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //   console.log(event.target);
  //   console.log(newValue);
  // };

  return (
    <div id="Dining_bar_price">
      <Typography
        id="range-slider"
        gutterBottom
        className="price-area d-flex justify-content-around align-items-center"
      >
        <div class="price-text">PRICE</div>
        <div id="price-range">
          ${props.price[0]} – ${props.price[1]}
        </div>
      </Typography>
      <Slider
        id="price-slider"
        value={props.price}
        onChange={(event, value) => props.handleChange(event, value)}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={300}
        max={2000}
      />
    </div>
  );
}
