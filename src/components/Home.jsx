import React from 'react'
import './Home.css'
import homeimage from '../images/homeimage.jpg'

const Home=() =>{
  return (
    <div className= "Home">
      <br/>


      <h2>"WELCOME TO DIIMPLE'S OFFICIAL PHOTOGRAPHY WEBSITE"</h2>
      <br/>

      <h2>"CREATIVITY TAKES COURAGE"</h2>
      <h2>TAKING PICTURES IS SAVORING LIFE INTENSELY,</h2>
        <h2>EVERY HUNDREDTH OF A SECOND PHOTOGRAPHY IS A </h2>
       <h2>PICTURE PAINTED BY THE SUN WITHOUT INSTRUCTION IN ART</h2>
        
        <br/> 
      <img src={homeimage} alt="home" height={400} width={700} className="main--image"/>
       <br/>
      <br/>
      <h2>"CREATIVITY TAKES COURAGE"</h2>
    </div>
  )
}

export default Home;
