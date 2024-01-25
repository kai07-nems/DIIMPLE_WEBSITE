import React from 'react';
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css';


function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classlist.toggle("responsive_nav");
  }
  return (
    <header>
      <h3>DIIMPLE'S PHOTOGRAPHY</h3>
      <nav ref={navRef}>
       
      <a href="/#">Home</a>
      <a href="/#">About</a>
      <a href="/#">Services</a>
      <a href="/#">Contact</a>
      <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes/>
      </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>

    
  );
}

export default Navbar

