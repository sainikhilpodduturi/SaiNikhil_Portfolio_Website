import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
    <section id="contact">
        <h2 className="contact-header">CONTACT ME</h2>
        <p className="contact-desc">Please fill out the form below to discuss any work oppurtunities.</p>
        <form className="contact-form">
          <input type="text" placeholder='Enter your Name' className="name" />
          <input type="text" placeholder='Enter your Email' className="email" />
          <textarea name="message" rows="10" placeholder='Enter your Message' className="message"></textarea>
          <button type='submit' value='send' className="submit-btn" >Submit</button>
        </form>
    </section>
  )
}

export default Contact
