import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact-container">

      <h1>Contact Us</h1>

      <p className="contact-text">
        Have questions, feedback, or need help with your order? We're here to
        assist you! Reach out to us using the information below.
      </p>

      <div className="contact-card">
        <h2>Customer Support</h2>
        <p>Email: support@vsk-ecommerce.com</p>
        <p>Phone: +91 9494382720</p>
        <p>Available: Monday–Saturday, 9 AM – 7 PM</p>
      </div>

      <div className="contact-card">
        <h2>Business Enquiries</h2>
        <p>Email: veeraboinasai123@gmail.com</p>
        <p>For partnerships, promotions & wholesale deals.</p>
      </div>

      <div className="contact-card">
        <h2>Our Office</h2>
        <p>VSK Ecommerce Pvt. Ltd.</p>
        <p>Suryapet, Telangana</p>
        <p>PIN: 508213</p>
      </div>

      {/* Google Maps Embed */}
      <div className="map-wrapper">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1345.8752476599457!2d78.71484507958756!3d17.425696735221155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb743a6797e36f%3A0x412d2fd143bdaa34!2sOMEGA%20PG%20COLLEGE%20MCA!5e0!3m2!1sen!2sin!4v1766136887349!5m2!1sen!2sin"
          width="60%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
