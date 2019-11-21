import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./Dining_bar_list.css";

class Dining_bar_card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
<div className="card-wrap">
            {this.state.data.map((arr, i) => (
              <Card
                key={i}
                onMouseEnter={this.boundmarker(arr)}
                onMouseLeave={this.stopbound(arr)}
              >
                <Card.Img
                  key={(k += 2)}
                  variant="top"
                  src={`./${arr.preview_pic}`}
                  style={{ width: "100%" }}
                />
                <Card.Body key={i}>
                  <Card.Title key={i}>{arr.name}</Card.Title>
                  <p key={(k += 2)}>{arr.address}</p>

                  <Button
                    variant="primary"
                    key={arr.sid}
                    as={Link}
                    to={`/Dining_bar_detail/${arr.sid}`}
                    onClick={this.console}
                  >
                    {/* <Link to="/Dining_bar_detail" /> */}
                    預約店家
                  </Button>
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
        


      <div className="card-wrap">
        {this.props.data.map((arr, i) => (
          <Card
            key={arr.sid}
            onMouseEnter={() => this.props.mouseIn(arr.latlng)}
            onMouseLeave={() => this.props.stopbound(arr.latlng)}
          >
            <Card.Img
              key={arr.sid}
              variant="top"
              src={`./${arr.preview_pic}`}
              style={{ width: "100%" }}
            />
            <Card.Body key={i}>
              <Card.Title key={i}>{arr.name}</Card.Title>
              <p key={arr.sid}>{arr.address}</p>
              <Button variant="primary" key={arr.sid}>
                預約店家
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    )

  }
}
export default Dining_bar_card;
