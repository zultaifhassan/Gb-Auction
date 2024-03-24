import React from "react";
import "./Contact.css";
import { User, Mail, MessageSquare } from "react-feather";

const Contact = () => {
  return (
    <div className="max-width contact-page-inner">
      <div className="contact-page">
        <form>
          <h2>Contact Us</h2>
          <h1>Get In Touch</h1>
          <p>Have inquiries or feedback? We're all ears! Reach out to us and let's<br/> start a conversation.</p>
          <div className="contact-page-inputs">

            <span>
              <User />
              <input type="text" placeholder="Your Name" />
            </span>
            <span>
              <Mail />
              <input type="mail" placeholder="Your Mail" />
            </span>
            <span>
              <MessageSquare />
              <input type="text" placeholder="Your Message" />
            </span>

          </div>
          <button>Submit</button>
        </form>
        <div className="contcat-page-left">
          <img src="/Images/contact.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
