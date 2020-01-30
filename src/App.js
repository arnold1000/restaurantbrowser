import React, { useState, useEffect} from 'react'
import jsonData from './restaurantdata.json'
import Button from './components/Button'
import Header from './components/Header'
import Restaurants from './components/Restaurants'

import './App.css';



const App = (props) => {
//Functions for the application

//State hook

  const [ data, setNewData ] = useState([
    {
      name: '',
      description: '',
      image : ''
    }
  ])

  //Function for sorting the restaurants in asceding order
  const sortAscending = (values) => {
    return(
      values.sort(function(a,b){
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
    )
  }

  //Function for sorting the restaurants in a descending order 
  const sortDescending = (values) => {
    return(
      values.sort(function(a,b){
        return a.name > b.name ? -1 : a.name < b.name ? 1 : 0
      })
    )
  }

  //Function for setting the app state to be restaurants in ascending order
  const sortRestaurantsAscending = () => {
    var newData = [].concat(data)
      setNewData(sortAscending(newData))
  }
  //Function for setting the app state to be restaurants in descending order
  const sortRestaurantsDescending = () => {
    var newData = [].concat(data)
      setNewData(sortDescending(newData))
  }



  // Function for initializing the app state
  const dataModifier = () => {
    const restaurantObjects = []

    jsonData["restaurants"].map(element => restaurantObjects.push( 
       {
        name: element.name, 
        description: element.description,
        image: element.image}  
       ))
    
    setNewData(restaurantObjects)
  }

  // When app is first loaded the dataModifier() function is called 
  useEffect(() => {
    dataModifier()
    
  }, [])


  return (
    <div>
      <Header />  
      <Button text = "Sort ascending" onClick = {() => sortRestaurantsAscending()}/>
      <Button text = "Sort descending" onClick = {() => sortRestaurantsDescending()}/>
      <Restaurants restaurantData = {data}/>  
    </div>
  );
}

export default App;
