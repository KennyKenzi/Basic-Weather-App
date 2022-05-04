import React, { Component } from 'react';



class DrillDownCard extends Component {
    state = {  }


    imageStyle = () => {
        return {
          width: "20%",
    
        };
      };

      cardStyle = () => {
        return {
          border: "2px solid white",
          padding: "10px",
          fontSize: "small"
        };
      };
      listStyle(){
          return{
            listStyle: "none",
            paddingInlineStart: "unset" 
          }
          
      }
      listText(){
          return{
            textAlign: "left",
            // display: "contents",
            
          }
      }
      getIcon(stuff){
        return(
          "http://openweathermap.org/img/wn/" + stuff + "@2x.png"
        )
      }

    render() { 

 
        const {dt_txt, main, weather} = this.props.drillData
            
        return (
          <div className="card" style={this.cardStyle()}>
            <img
              className="card-img-top"
              style={this.imageStyle()}
              src={this.getIcon(weather[0].icon)}
              alt="Not available"
            />
            <div className="card-body">
            <h5 className="card-title">{weather[0].description.toUpperCase()}</h5>
              <h5 className="card-title">{dt_txt}</h5>
            </div>
            <ul
              className="list-group list-group-flush"
              style={this.listStyle()}
            >
              <li className="list-group-item" style={this.listText()}>
                High Temp: <b>{main.temp_max} °F </b>{" "}
              </li>
              <li className="list-group-item" style={this.listText()}>
                Low Temp: <b>{main.temp_min} °F </b>
              </li>
              <li className="list-group-item" style={this.listText()}>
                Humidity: <b>{main.humidity} g/m3</b>{" "}
              </li>
              <li className="list-group-item" style={this.listText()}>
                Pressure: <b>{main.pressure} Pa</b>
              </li>
              <li className="list-group-item" style={this.listText()}>
                Sea Lvl: <b>{main.sea_level} feet </b>
              </li>
            </ul>
          </div>
        );

        
        }

    
}
 
export default DrillDownCard ;