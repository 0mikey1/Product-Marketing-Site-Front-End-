import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="cus">
      <h1>Contact Us</h1>
      <div className="contactForm">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email address" />
        <textarea placeholder="Message"></textarea>
        <button>Send!</button>
        <span>Thank you for your message, we will be in touch in no time!</span>
      </div>
    </div>
  );
};

export default Contact;
