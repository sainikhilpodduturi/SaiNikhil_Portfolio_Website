import React, { useRef } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import GithubLogo from "../assets/githubLogo.png"
import LinkedInLogo from "../assets/linkedinLogo.png"


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
      <p className="link-header">Visit My Social Profiles</p>
      <div className="links">
        <button className="link" onClick={()=>{window.open('https://github.com/sainikhilpodduturi')}}><img src={GithubLogo} alt="Github Logo" className="link-logo"/><span>Github</span></button>
        <button className="link" onClick={()=>{window.open('https://www.linkedin.com/in/sainikhil-podduturi-0b1a261a6/')}}><img src={LinkedInLogo} alt="LinkedIn Logo" className="link-logo"/><span>LinkedIn</span></button>
      </div>
    </section>
  );
};

export default Contact;
