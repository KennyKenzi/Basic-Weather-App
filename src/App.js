import React, { Component } from "react";
import "./App.css";
import WeatherCardField from "./components/weatherCardField";
import axios from "axios";
import weatherdata from "./getweather";
import Drilldown from "./components/drillDown";
import Navbar from "./components/Nav";


class App extends Component {
  state = {
    days: [],
    drillDownData: [],
    loading: this.showLoading(),
    lon: "34.33050",
    lat: "47.159401"

  };


  getData() {
    let results = axios.get(
      weatherdata.weatherdata.dailyDataUrl +
        `?lat=${this.state.lat}&lon=${this.state.lon}&appid=${weatherdata.weatherdata.API}`
    );
    return results;
  }

  weatherData = async () => {
    this.setState({ loading: this.showLoading() });
    const response = await this.getData();

    const data = response.data.list;

    //looping through daily weather data to get weather data for once a day
    let newarr = []
    var days ={
              0: "Today",
              8: "Tomorrow",
              16: "Day 3",
              24: "Day 4",
              32: "Day 5"
            }
   
    for(let i = 0; i< data.length; i+=8){
      var itm = {
        id: i+1,
        day: days[i],
        date: data[i].dt_txt.slice(0, 11),
        time: data[0].dt_txt.slice(11),
        highTemp: data[i].main.temp_max,
        lowTemp: data[i].main.temp_min,
        icon: "http://openweathermap.org/img/wn/" + data[i].weather[0].icon + "@2x.png",
        description: data[i].weather[0].description
      }

      newarr.push(itm)
    }

    this.setState({ days: newarr, loading: this.hidingLoading() });
  };

  getLocation = (longlat)=>{
  
    
   
    if(longlat){    
      var tempArr = longlat.split("$")
      this.setState({lon: tempArr[0], lat: tempArr[1] , drillDownData:[]})
  
    }else{
      console.log('data not mined====',longlat)
    }

    this.weatherData()
  }


  
  viewDrill = async dt => {
    this.setState({ loading: this.showLoading()});
    //add data to drill down state

    const response = await this.getData();
    const data = response.data.list;
    const dateObject = [];
    data.forEach(el => {
      if (el.dt_txt.includes(dt)) {
        // data[el].dt_txt.slice(0,11)
        dateObject.push(el);
      }
    });
    this.setState({ drillDownData: dateObject, loading: this.hidingLoading() });

    
  };

 

  appStyle() {
    return {
      margin: "auto"
    };
  }

  drillStyle() {
   var displayvalue = this.state.drillDownData.length<1 ?"none":"inline-flex"

    return {
      // background: "linear-gradient(to bottom right, #00ffff 30%, #2F4F4F 80%)",
      margin: "none",
      display: displayvalue,
      backgroundColor: "transparent"
    };
    
  }

  showLoading() {
    return {
      display: "block",
      fontSize: "xxx-large"
    };
  }

  hidingLoading() {
    return {
      display: "none"
    };
  }




  render() {

    return (
      <div className="App p-0" style={{background: "linear-gradient(to bottom right, #ebf8fa 40%, #2F4F4F 80%"}}> 
       <div className="container-fluid p-0 py-2" >
          <div style={this.state.loading}>Loading...</div>
          <Navbar getLocation={this.getLocation}/>
            <div className="row" style={this.appStyle()}>
              <WeatherCardField data={this.state.days} viewDrill={this.viewDrill} />
              <hr />
            </div>
            <div className="jumbotron jumbotron-fluid row" style={this.drillStyle(this.state.drillDownData)}> 
              <Drilldown drillData={this.state.drillDownData} />
            
            </div>
        </div>
      </div>
    );
  }
}

export default App;
