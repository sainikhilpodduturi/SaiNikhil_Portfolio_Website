import React, { useRef } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2 className="contact-header">CONTACT ME</h2>
      <p className="contact-desc">
        Please fill out the form below to discuss any work oppurtunities.
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          placeholder="Enter your Name"
          className="name"
          name="name"
        />
        <input
          type="text"
          placeholder="Enter your Email"
          className="email"
          name="email"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Enter your Message"
          className="message"
        ></textarea>
        <button type="submit" value="send" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
