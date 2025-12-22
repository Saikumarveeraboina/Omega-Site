import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.css'

const Home = () => {
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
        {/* CALL TO ACTION SECTION */}
        <section className="cta-section">
          <h2 className="cta-heading">Discover More Features</h2>
          <Link to="/features" className="cta-button">Explore Features</Link>
        </section>
      </div>
    </>

  )
}

export default Home;