import React from 'react';
import './Services.css';
import firstpic from '../images/firstpic.jpg';
import serviceswedding1 from '../images/serviceswedding1.jpg';
import serviceswedding2 from '../images/serviceswedding2.jpg';
import servicesbabyshower1 from '../images/servicesbabyshower1.jpg';
import servicesbabyshower2 from '../images/servicesbabyshower2.jpg';
import servicesstudio from '../images/servicesstudio.jpg';
import servicesstudio2 from '../images/servicesstudio2.jpg';
import servicesevent1 from '../images/servicesevent1.jpg';
import servicesevent2 from '../images/servicesevent2.jpg';

const Services=()=> {
  return (
    <div className="services-container">
      <h3>DIIMPLE'S PHOTOGRAPHY OFFERS A VARIETY OF SERVICES:</h3>
      <h2>Here is some of my greatest work...</h2>
      <h2> We offer the following :
         Wedding Photoshoot,
         Studio Photoshoot,
         Babyshower Photoshoot,
         Event Photoshoot

      </h2>
      <div className="services-grid">
        <br/>
        <img src={firstpic} alt="firstpic" className="main--image"/>
        <img src={serviceswedding1} alt="serviceswedding" className="main--image"/>
        <img src={serviceswedding2} alt="serviceswedding" className="main--image"/>
        <img src={servicesbabyshower1} alt="servicesbabyshower" className="main--image"/>
        <img src={servicesbabyshower2} alt="servicesbabyshower" className="main--image"/>
        <img src={servicesstudio} alt="servicesstudio" className="main--image"/>
        <img src={servicesstudio2} alt="servicesstudio" className="main--image"/>
        <img src={servicesevent1} alt="servicesevent" className="main--image"/>
        <img src={servicesevent2} alt="servicesevent" className="main--image"/>

      </div>
    </div>
  )
}

export default Services;
