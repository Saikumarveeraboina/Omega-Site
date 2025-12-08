import React from "react";
import Header from "../Header/Header";
import "./index.css";

const About = () => {
  return (
    <>
      <Header />

      <div className="about-container">
        <h1>About VSK-Ecommerce</h1>

        <p className="about-text"> 
           
          VSK-Ecommerce is your trusted online shopping destination, started in 2025 with a passion for
          delivering high-quality products at affordable prices. Our mission is
          to bring a seamless and enjoyable shopping experience to every
          customer through fast delivery, curated collections, and excellent
          service.
        </p>

        <h2>Our Story</h2>
        <p className="about-text">
          We started VSK-Ecommerce with a simple vision: to make online shopping
          smooth, secure, and accessible for everyone. From everyday essentials
          to trending products, we strive to provide a wide range of items that
          suit every lifestyle and budget.
        </p>

        <h2>Why Shop With Us?</h2>
        <ul className="about-list">
          <li>✔ High-quality curated products</li>
          <li>✔ Fast & reliable delivery</li>
          <li>✔ Secure checkout & multiple payment options</li>
          <li>✔ 24/7 customer support</li>
          <li>✔ Hassle-free returns and refunds</li>
        </ul>

        <h2>Our Vision</h2>
        <p className="about-text">
          To become one of India’s leading e-commerce platforms by focusing on
          customer satisfaction, innovative solutions, and continuous
          improvement.
        </p>
      </div>
    </>
  );
};

export default About;
