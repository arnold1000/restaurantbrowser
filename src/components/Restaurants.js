import React from 'react'
import Infocard from './Infocard'


// Component that uses the Infocard component to render all restaurants
const Restaurants = (props) => {
    return(
      <div>
       {props.restaurantData.map((n,index) => <Infocard rData = {n} key = {index} /> )}
      </div>
    )
  }

  

export default Restaurants