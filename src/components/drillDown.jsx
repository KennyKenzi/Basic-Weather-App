import React, { Component } from 'react';
import DrillDownCard from './drillDownCard'



class DrillDown extends Component {
    state = {  }

    drillStyle=()=>{
      return{
        display:'-webkit-box'
      }
    }



    render() { 

            return this.props.drillData.map((el)=>( 
                <span className="row card-group" style={this.drillStyle()}>
                  <DrillDownCard drillData={el}/>  
                </span>
                
            ))

        }
      

    
}
 
export default DrillDown ;