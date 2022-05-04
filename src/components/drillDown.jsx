import React, { Component } from 'react';
import DrillDownCard from './drillDownCard'



class DrillDown extends Component {
    state = {  }

    drillStyle=()=>{
      return{
        // display:'-webkit-box'
      }
    }


    render() { 
            return this.props.drillData.map((el)=>( 
                <span className="card-group col-md" style={this.drillStyle()} key={el.dt}>
                  <DrillDownCard  drillData={el} /> 
                </span>
                
            ))

        }
      

    
}
 
export default DrillDown ;