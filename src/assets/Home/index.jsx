import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useAuth } from "../../routes/Auth/AuthContext";
import "./index.css";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="home-container">

        {/* ===== RESPONSIVE BANNER SECTION ===== */}
        <section className="carousel-section fade-in">
          <picture>
            {/* Mobile Image */}
            <source
              media="(max-width: 768px)"
              srcSet="/Images/screen1.png"
            />

            {/* Desktop Image */}
            <img
              src="/Images/desktop.png"
              alt="Banner"
              className="carousel-img"
            />
          </picture>
        </section>


        {/* ===== COLLEGE INFO ===== */}
        <div className="home-content slide-up">
          <h2 className="college-title">
            STUDENTS PORTAL
          </h2>
          <p className="college-address">
            Devoloped for MCA students of Omega PG College, this portal centralizes syllabus, materials, updates, and tools in one secure platform.
          </p>

          {!user && (
            <Popup
              trigger={<button className="note-btn blink-text"> 👉 Click Here</button>}
              position="top right"
              closeOnDocumentClick
            >
              <div className="note-popup">
                Dear Student,<br />
                Please login to access all features.
                <br /><br />
                📱 Mobile users: Login with Email & Password
                <br />
                (Avoid Google signup on mobile)
                <br /><br />
                — Omega
              </div>
            </Popup>
          )}
        </div>

        {/* ===== ABOUT PORTAL ===== */}
        <section className="info-section fade-in">
          <h3>About This Portal</h3>
          <p>
            This academic portal is designed exclusively for
            <strong> MCA students of Omega PG College</strong>.
            It serves as a centralized platform to access syllabus,
            academic materials, student utilities, and essential
            college-related information in one place.
          </p>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="info-section slide-up">
          <h3>How This Website Works</h3>
          <ul>
            <li>🔐 Students register and login securely</li>
            <li>📚 Access semester-wise syllabus and materials</li>
            <li>🧮 Use built-in tools like Grade Calculator</li>
            <li>📢 View academic updates and information</li>
            <li>📍 Contact college through map & form</li>
          </ul>
        </section>

        {/* ===== STUDENT BENEFITS ===== */}
        <section className="info-section slide-up">
          <h3>How This Helps Students</h3>
          <ul>
            <li>✅ Saves time by centralizing academic resources</li>
            <li>✅ Reduces dependency on WhatsApp / external links</li>
            <li>✅ Helps students track grades and performance</li>
            <li>✅ Accessible on both desktop and mobile</li>
            <li>✅ Secure access using student authentication</li>
          </ul>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="info-section fade-in">
          <h3>Key Features</h3>
          <div className="features-grid">
            <span>📘 Syllabus</span>
            <span>📂 Study Materials</span>
            <span>🧮 Grade Calculator</span>
            <span>👨‍🏫 Faculty Information</span>
            <span>📅 Academic Updates</span>
            <span>📞 Contact & Location</span>
          </div>
        </section>

        {!user && (
          <div className="cta-section slide-up">
            <h3>Get Started</h3>
            <p>
              Login to explore all academic features designed
              for Omega MCA students.
            </p>
            <Link to="/login" className="cta-btn">
              Login Now
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
