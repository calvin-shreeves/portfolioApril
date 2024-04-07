import React from "react";
import "./contactForm.css";
const ContactForm = () => {
  return (
    <div id="contactForm">
      <div>ContactForm</div>
      <form>
        <div className="inputContainer">
          <label>name</label>
          <input placeholder="name"></input>
        </div>
        <div className="inputContainer">
          <label>Email</label>
          <input placeholder="name"></input>
        </div>
        <div className="inputContainer">
          <label>Subject:</label>
          <input placeholder="name"></input>
        </div>
        <div className="inputContainer">
          <label>Message:</label>
          <textarea type="text" placeholder="message" rows={5}></textarea>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "35%" }}
        >
          <input style={{}} type="submit" name="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
