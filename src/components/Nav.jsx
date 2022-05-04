import React, { Component } from "react";
import cities from "../data/citylist.json"
 import { country } from "../getweather";


// import WeatherCard from "./weatherCard";


class Navbar extends Component {
  state = {
    searchValue: "",
    selectedCity: country.defaultcity,
    lonlat: country.defaultlocation,
    city:[]
  };


  componentDidMount(){
    this.props.getLocation(this.state.lonlat)

    this.loadCities().then((res)=>{
      this.setState({city: res, loading: false})
    })
    
  }



  rowStyle = () => {
 
  };

  loadCities = async()=>{
    var citi = await cities.filter((el=>
     {return el.country === country.country && el.state !== ""}
    ))
    return citi
  }

  location=()=>{ 
   var city = []

  if(this.state.city){
    // console.log(  this.state.city)
    city = this.state.city
    var list = []
    var lonlat
    if(this.state.searchValue === undefined){
      for (let i = 0; i < city.length; i++) {   
        lonlat = city[i].coord.lat+ `$` + city[i].coord.lon
        list.push(<div className="dropdown-item" key={city[i].id} id={lonlat} onClick = {this.handleChange}>{city[i].name}</div>)     
      }
    }else{
      for (let i = 0; i < city.length; i++) { 
        if(city[i].name.toUpperCase().indexOf(this.state.searchValue.toUpperCase()) > -1){
          lonlat = city[i].coord.lon+ `$` + city[i].coord.lat
          list.push(<div className="dropdown-item" key={city[i].id}  id={lonlat} onClick = {this.handleChange}>{city[i].name}</div>)  
        }      
      }
    }
    return list
}
     
    
  }

  handleChange=async(e)=>{
    
    this.setState({searchValue: e.target.value, selectedCity: e.target.innerHTML});

    if (e.target.id !== 'searchCity'){
    this.setState({searchValue: "", lonlat: e.target.id})
    await this.props.getLocation(e.target.id)
    }
  }








  render() {
    return  (
      <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown_coins" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
            {this.state.selectedCity}
          </button>
          <hr/>
          <em>Cities in </em><b>{country.country}</b>
        <div id="menu" className="dropdown-menu" aria-labelledby="dropdown_coins">
        <form className="px-4 py-2">
            <input type="search" className="form-control" id="searchCity" placeholder="city. eg. London"  onChange={this.handleChange} value={this.state.searchValue}></input>
        </form>
        <div id="menuItems">
          {this.location()}
        </div>
        <div id="empty" className="dropdown-header">No match</div>
        </div>
      </div>
    )
}


}

export default Navbar;
