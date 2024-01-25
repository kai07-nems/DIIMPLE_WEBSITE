import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';



 const App=()=> {
  return (
    <div>
      <React.Fragment>
      <Navbar/>
      </React.Fragment>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </div>
    
  )
}

export default App;