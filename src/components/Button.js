import React from 'react'


//Button component for the sorting buttons
const Button = (props) => {
    return(
      <div className = "buttonclass">
        <button type ="button" className="btn btn-light" onClick = {props.onClick}> {props.text}</button>
      </div>
    )
  }


export default Button