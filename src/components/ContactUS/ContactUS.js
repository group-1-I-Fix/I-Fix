import React from "react";
import { useState } from "react";
import "./ContactUS.css";
function ContactUS() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {};
  return (
    <div className="fromContainer">
      <div className="form-wrap">
        <h1>Contact us</h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              className="formControl"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="EmailInput">Email address</label>
            <input
              type="email"
              className="formControl"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="messageInput">Message</label>
            <textarea
              className="formControlText"
              value={message}
              onChange={onMessageChange}
            />
          </div>
          <button type="submit" className="SubBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUS;
