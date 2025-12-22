import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Pages/firebase";
import "./index.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      await addDoc(collection(db, "contactMessages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      alert("Message sent successfully ✅");
      e.target.reset();
    } catch (error) {
      alert("Failed to send message ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* ADDRESS */}
      <div className="contact-card">
        <h3>Address</h3>
        <p className="contact-text">
          Sy.No.7, Edulabad (V), Ghatkesar (M), Medchal.(Dist),
          Telangana - 501301
        </p>
      </div>

      {/* CONTACT DETAILS */}
      <div className="contact-card">
        <h2>Contact numbers</h2>
        <p>Email: omegapgedulabad@gmail.com</p>
        <p>+91 9246805933, 9912988863</p>
        <p>Available: Monday–Saturday, 10 AM – 4 PM</p>
      </div>

      {/* CONTACT FORM */}
      <div className="contact-card">
        <h2>Send Us a Message</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="map-wrapper">
        {!showMap ? (
          <button
            className="map-btn"
            onClick={() => setShowMap(true)}
          >
            📍 View Location on Map
          </button>
        ) : (
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60920.27331413731!2d78.55150899918213!3d17.386955527075234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb743a6797e36f%3A0x412d2fd143bdaa34!2sOMEGA%20PG%20COLLEGE%20MCA!5e0!3m2!1sen!2sin!4v1766392163074!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
