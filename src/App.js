import React, { Component } from "react";
import "./App.css";
import WeatherCardField from "./components/weatherCardField";
import axios from "axios";
import weatherdata from "./getweather";
import Drilldown from "./components/drillDown";

class App extends Component {
  state = {
    days: [],
    drillDownData: [],
    loading: this.showLoading()
  };

  componentDidMount() {
    this.weatherData();
  }

  getData() {
    let results = axios.get(
      weatherdata.weatherdata.dailyDataUrl +
        "?id=524901&APPID=e13a603c7d1c518596c19b2dc86ca75a"
    );

    return results;
  }

  weatherData = async () => {
    const response = await this.getData();
    const data = response.data.list;
    console.log(data)

 
    var newarr = [
      {
        id: 1,
        day: "Today",
        date: data[0].dt_txt.slice(0, 11),
        time: data[0].dt_txt.slice(12),
        highTemp: data[0].main.temp_max,
        lowTemp: data[0].main.temp_min,
        icon: "http://openweathermap.org/img/wn/" + data[0].weather[0].icon + "@2x.png",
        description: data[0].weather[0].description 
      },
      {
        id: 2,
        day: "Tomorrow",
        date: data[8].dt_txt.slice(0, 11),
        time: data[0].dt_txt.slice(12),
        highTemp: data[8].main.temp_max,
        lowTemp: data[8].main.temp_min,
        icon: "http://openweathermap.org/img/wn/" + data[8].weather[0].icon + "@2x.png",
        description: data[8].weather[0].description 
      },
      {
        id: 3,
        day: "Day 3",
        date: data[16].dt_txt.slice(0, 11),
        time: data[0].dt_txt.slice(12),
        highTemp: data[16].main.temp_max,
        lowTemp: data[16].main.temp_min,
        icon: "http://openweathermap.org/img/wn/" + data[16].weather[0].icon + "@2x.png",
        description: data[16].weather[0].description 
      },
      {
        id: 4,
        day: "Day 4",
        date: data[24].dt_txt.slice(0, 11),
        time: data[0].dt_txt.slice(12),
        highTemp: data[24].main.temp_max,
        lowTemp: data[24].main.temp_min,
        icon: "http://openweathermap.org/img/wn/" + data[24].weather[0].icon + "@2x.png",
        description: data[24].weather[0].description 
      },
      {
        id: 5,
        day: "Day 5",
        date: data[32].dt_txt.slice(0, 11),
        time: data[0].dt_txt.slice(12),
        highTemp: data[32].main.temp_max,
        lowTemp: data[32].main.temp_min,
        icon: "http://openweathermap.org/img/wn/" + data[32].weather[0].icon + "@2x.png",
        description: data[32].weather[0].description 
      }
    ];
    console.log(newarr)
    this.setState({ days: newarr, loading: this.hidingLoading() });
  };

  appStyle() {
    return {
      margin: "10px"
    };
  }
  drillStyle() {
    return {
      background: "linear-gradient(to bottom right, #00ffff 30%, #2F4F4F 80%)",
      margin: "20px",
      display: "inline-flex"
    };
  }

  showLoading() {
    return {
      display: "block"
    };
  }

  hidingLoading() {
    return {
      display: "none"
    };
  }

  viewDrill = async dt => {
    this.setState({ loading: this.showLoading(), drillData: [] });
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

  render() {
    return (
      <div className="App">
        <div className="Container-Fluid" style={this.appStyle()}>
          <WeatherCardField data={this.state.days} viewDrill={this.viewDrill} />
          <hr />
          <div className="jumbotron jumbotron-fluid" style={this.drillStyle()}>
            <h3 style={this.state.loading}>Loading...</h3>

            <Drilldown drillData={this.state.drillDownData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
