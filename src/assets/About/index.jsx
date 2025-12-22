import { useState } from "react";
import "./index.css";

const About = () => {
  const [showChairman, setShowChairman] = useState(false);
  const [showCollege, setShowCollege] = useState(false);

  return (
    <div className="about-container">

      {/* ---------- CHAIRMAN SECTION ---------- */}
      <h1 className="about-title">Chairman</h1>

      <div className="about-section">
        <div className="about-image-box">
          <img
            src="/Images/chairman-1.jpg"
            alt="Chairman"
            className="about-image"
          />
          <h3>Mr. Nagam Mohan Reddy</h3>
          <p className="designation">Founder & Chairman</p>
        </div>

        <div className="about-content">
          <p>
            OMEGA is a unique place of learning shaped by the vibrant past,
            present and future of INDIA. Building on this impressive educational
            heritage, we have emerged into one of the most progressive and
            exciting educational institutions in Hyderabad.
          </p>

          {showChairman && (
            <>
              <p>
                OMEGA is an exciting place to be. We place our students at the
                centre of everything we do. We work hard to ensure that you
                receive the support, guidance and help you need to get the most
                from your studies and wider college life.
              </p>

              <p>
                The words which provide the over-arching theme for the VISION are
                <strong> “Leading, Inspiring & Delivering”.</strong>
              </p>

              <p>
                Our ethos is summed up by three words,
                <strong> “Dream, Plan, Achieve”.</strong>
              </p>
            </>
          )}

          <button
            className="read-more-btn"
            onClick={() => setShowChairman(!showChairman)}
          >
            {showChairman ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* ---------- COLLEGE SECTION ---------- */}
      <h1 className="about-title">About the College</h1>

      <div className="about-section reverse">
        <div className="about-image-box">
          <img
            src="/Images/college.jpg"
            alt="College"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <p>
            Choosing postgraduate study can be a key career choice. Many of you
            will be in professional positions with demands on your time including
            family and other outside interests.
          </p>

          {showCollege && (
            <>
              <p>
                Whatever your aims, choosing the OMEGA PG COLLEGE means you are
                enhancing your prospects with a flexible programme underpinned
                by outstanding support and dedicated teaching staff.
              </p>

              <p>
                In addition, our multicultural student community and outstanding
                facilities will enhance your overall learning experience at
                OMEGA.
              </p>

              <p>
                At OMEGA we encourage you to Dream, Plan and Achieve. It’s a
                college where knowledge is valued and achievement is recognized,
                rewarded and celebrated.
              </p>
            </>
          )}

          <button
            className="read-more-btn"
            onClick={() => setShowCollege(!showCollege)}
          >
            {showCollege ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
