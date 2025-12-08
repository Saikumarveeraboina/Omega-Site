import React from "react";
import Header from "../Header/Header";
import "./index.css";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="contact-container">
        <h1>Contact Us</h1>

        <p className="contact-text">
          Have questions, feedback, or need help with your order? We're here to
          assist you! Reach out to us using the information below.
        </p>

        <div className="contact-card">
          <h2>Customer Support</h2>
          <p>Email: support@vsk-ecommerce.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Available: Monday–Saturday, 9 AM – 7 PM</p>
        </div>

        <div className="contact-card">
          <h2>Business Enquiries</h2>
          <p>Email: business@vsk-ecommerce.com</p>
          <p>For partnerships, promotions & wholesale deals.</p>
        </div>

        <div className="contact-card">
          <h2>Our Office</h2>
          <p>VSK Ecommerce Pvt. Ltd.</p>
          <p>Hyderabad, Telangana</p>
          <p>PIN: 500038</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
