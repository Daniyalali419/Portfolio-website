import "./Form.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" />
            <label>Your Email</label>
            <input type="email" />
            <label>Subject</label>
            <input type="subject" />
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form