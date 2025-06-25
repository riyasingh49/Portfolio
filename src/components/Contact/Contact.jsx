import React from 'react'
import "./Contact.css"
import mail from "../../assets/mail.png"
import git from "../../assets/git.png"
import linkedin from "../../assets/linkedin.png"
import map from "../../assets/map.png"
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let’s Connect</h1>
                <p>Feel free to reach out to me for any questions or opportunities!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" /> <p>riyasingh454247@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={git} alt="" /> <p>https://github.com/riyasingh49</p>
                    </div>
                    <div className="contact-detail">
                        <img src={linkedin} alt="" /><p>https://www.linkedin.com/in/riya-singh-138b352a4</p>
                    </div>
                    <div className="contact-detail">
                        <img src={map} alt="" /><p>Lucknow, Uttar Pradesh</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor = "">Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='text' placeholder='Enter your email' name='email'/>
                <label htmlFor=''>Write your message here</label>
                <textarea name='message' rows="5" placeholder='Enter your message'/>
                <button type = "submit" className='contact-submit'>Submit now</button> 
            </form>
        </div>
        
      
    </div>
  )
}

export default Contact
