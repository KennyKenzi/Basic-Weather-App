import React, { Component } from "react";


class WeatherCard extends Component {
  state = {};

  cardStyle = () => {
    return {
      border: "2px solid white",
      padding: "10px"
    };
  };
  imageStyle = () => {
    return {
      width: "20%",

    };
  };

  render() {

    const {date, highTemp, lowTemp, day, time, icon, description} = this.props.data
   
    return (
      <div className="card col-sm=12 col-md=4 col-lg=2" style={this.cardStyle()}>
        <img
          className="card-img-top"
          style={this.imageStyle()}
          src={icon}
          alt="Not available"
        />
        <div className="card-body">
        <h4 className="card-title">{description.toUpperCase()}</h4>
          <h4 className="card-title">{day}: {date} </h4>
          <h4 className="card-title">Time: {time} </h4>
          <p className="card-text">High Temperature:<b>{highTemp} °F</b></p>
          <p className="card-text">Low temperature:<b>{lowTemp} °F</b></p>
          <button type="button" className="btn btn-outline-info"onClick={this.props.viewDrill.bind(this, date)}>
            More
          </button>
        </div>
      </div>
    ); 
    
        
    }
   
  
}

export default WeatherCard;
