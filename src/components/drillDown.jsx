import React, { Component } from 'react';
import DrillDownCard from './drillDownCard'



class DrillDown extends Component {
    state = {  }





    render() { 


            return this.props.drillData.map((el)=>( 
                <span>
                  <DrillDownCard drillData={el}/>  
                </span>
                
            ))

        }
      

    
}
 
export default DrillDown ;