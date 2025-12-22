import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useAuth } from "../../routes/Auth/AuthContext";
import './index.css'

const Home = () => {
   const { user } = useAuth();
  return (
    <>
      <div className="home-container">
        {/* CAROUSEL SECTION */}
        <section className="carousel-section">
          <Slider
            autoplay={true}
            autoplaySpeed={2000}
            infinite={true}
            arrows={true}
            dots={false}
            speed={600}
          >
            <div>
              <img src="/Images/screen2.jpg"
                alt="Slide 1" className="carousel-img" />
            </div>

            <div>
              <img src="/Images/screen1.jpg"
                alt="Slide 2" className="carousel-img" />
            </div>

            <div>
              <img src="/Images/screen3.jpg"
                alt="Slide 3" className="carousel-img" />
            </div>
            <div>
              <img src="/Images/screen4.jpg"
                alt="Slide 4" className="carousel-img" />
            </div>
            <div>
              <img src="/Images/screen5.jpg"
                alt="Slide 5" className="carousel-img" />
            </div>
          </Slider>
        </section>
        <div className="home-content">
      <h4 style={{fontSize: "22px", fontFamily: "roboto"}}>OMEGA PG COLLEGE - MCA (2174)</h4>
      <p>Edulabad (v), Ghatkesar , Hyderabad</p>

      {/* NOTE BUTTON */}
      {!user && (
        <Popup
          trigger={<button className="note-btn">Note</button>}
          position="top right"
          closeOnDocumentClick
        >
          <div className="note-popup">
          Dear Student, Please Login to access all features
          </div>
        </Popup>
      )}
    </div>
      </div>
    </>

  )
}

export default Home;