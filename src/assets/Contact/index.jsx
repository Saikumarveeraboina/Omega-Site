import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-card">
        <h3>Address</h3>

        <p className="contact-text">
          Sy.No.7, Edulabad (V), Ghatkesar (M),, Medchal.(Dist), Telangana - 501301
        </p>
      </div>
      <div className="contact-card">
        <h2>Contact numbers </h2>
        <p>Email: omegapgedulabad@gmail.com</p>
        <p> +91 9246805933,9912988863</p>
        <p>Available: Monday–Saturday, 10 AM – 4 PM</p>
      </div>


      {/* Google Maps Embed */}
      <div className="map-wrapper">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1345.8752476599457!2d78.71484507958756!3d17.425696735221155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb743a6797e36f%3A0x412d2fd143bdaa34!2sOMEGA%20PG%20COLLEGE%20MCA!5e0!3m2!1sen!2sin!4v1766136887349!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div >
  );
};

export default Contact;
