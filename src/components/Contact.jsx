import React from 'react';
import './Contact.css'

const Contact=()=> {
  return (
    <div className="contact-container">
      <h2>"FOR MORE INFORMATION"</h2>
      <h2>...DROP YOUR DETAILS BELOW...</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"/>

        <label htmlFor="contact">Contact:</label>
        <input type="contact" id="contact" name="contact"/>
         
         <label htmlFor="message">Message:</label>
         <textarea id="message" name="message"></textarea>

         <button type="submit">SUBMIT</button>
      </form>      
    </div>
  )
}

export default Contact;
