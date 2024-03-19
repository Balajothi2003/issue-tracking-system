import React from "react";
import './Contact.css';
const Contact = () => {
    return(
        <div className="conpic">
        <br></br>
        <br></br>
        
          <div className="contitle">
            <h1>Contact Us</h1>
          </div>
          <div className="conforms">
            <div className="cpic">
          <form >
            <br></br>
            <br></br>
            <input className="cinps" type="text" placeholder="Name"/><br></br><br></br><br></br>
            <input className="cinps" type="text"  placeholder="Email"/><br></br><br></br><br></br>
            <input className="cinps" type="text" placeholder="PhoneNumber"  /><br></br><br></br><br></br>
            <textarea className="cinps" placeholder="Message"></textarea><br></br><br></br>
            <button class="cbut">Send</button><br></br><br></br>
            
            </form>
          </div>
          </div>
        
      
    </div>
    )
}
export default Contact;
