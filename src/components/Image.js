import React from 'react'


// Image component for the restaurant image
const Image = (props) => {
    return(
      <div className = "card mb-3">
        <img src={props.imagesrc} className="card-img-top" alt="Card cap" ></img>
      </div>
    )
  }


export default Image