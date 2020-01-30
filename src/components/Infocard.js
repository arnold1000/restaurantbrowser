import React from 'react'
import Image from './Image'



// Component that uses Bootstrap card for a nice style
const Infocard = (props) => {
    return(
        <div className="card mb-3" style = {{display : 'block'}, {margin : '5%'}}>
          <Image imagesrc = {props.rData.image}/>
          <div className="card-body" >
            <h5 className="card-title">{props.rData.name}</h5>
            <p className="card-text">{props.rData.description}</p>
          </div>
        </div>
    )
  }


export default Infocard