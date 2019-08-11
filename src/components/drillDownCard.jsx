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


    render() { 


        const {dt_txt, main} = this.props.drillData
            
        return ( 
                <div className="card" style={this.cardStyle()}>
                <img className="card-img-top"
          style={this.imageStyle()}
          src="data:image/png;base64,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"
          alt="Not available"
        />
                <div className="card-body">
                  <h5 className="card-title">{dt_txt}</h5>
                 
                </div>
                <ul className="list-group list-group-flush" style={this.listStyle()}>
                  <li className="list-group-item" style={this.listText()}>High Temp: <b>{main.temp_max} °F </b> </li>
                  <li className="list-group-item" style={this.listText()}>Low Temp: <b>{main.temp_min} °F </b></li>
                  <li className="list-group-item" style={this.listText()}>Humidity: <b>{main.humidity} g/m3</b> </li>
                  <li className="list-group-item" style={this.listText()}>Pressure: <b>{main.pressure} Pa</b></li>
                  <li className="list-group-item" style={this.listText()}>Sea Lvl: <b>{main.sea_level} feet </b></li>
                </ul>
              
              </div>
              

            )

        
        }

    
}
 
export default DrillDownCard ;