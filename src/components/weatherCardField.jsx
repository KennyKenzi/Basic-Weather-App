import React, { Component } from "react";

import WeatherCard from "./weatherCard";

class WeatherCardField extends Component {
  state = {};

  rowStyle = () => {
    return {
      display: "-webkit-inline-box",
      background: "linear-gradient(to top left, #00ffff 30%, #ffffff 80%)"
    };
  };

  render() {
    return this.props.data.map(el => (
      <div key={el.id} className="row" style={this.rowStyle()}>
        <WeatherCard data={el}  viewDrill={this.props.viewDrill} />
      </div>
    ));
  }
}

export default WeatherCardField;
