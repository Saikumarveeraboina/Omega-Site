import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import screen1 from "../../Images/screen1.jpg"
import screen2 from "../../Images/screen2.jpg"
import screen3 from "../../Images/screen3.jpg"


import './Home.css'


const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* CAROUSEL SECTION */}
        <section className="carousel-section">
          <Slider
            autoplay={true}
            autoplaySpeed={3000}
            infinite={true}
            arrows={true}
            dots={true}
            speed={600}
          >
            <div>
              <img src={screen1}
                alt="Slide 1" className="carousel-img" />
            </div>

            <div>
              <img src={screen2}
                alt="Slide 2" className="carousel-img" />
            </div>

            <div>
              <img src={screen3}
                alt="Slide 3" className="carousel-img" />
            </div>
          </Slider>
        </section>
        </div>
        <div className="home-content">
        {/* SHOP NOW BUTTON */}
        <h1 className="home-title">Welcome to Vsk Trendz</h1>
        <p className="home-subtitle">Discover the latest trends in fashion and style</p>
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="home" className="home-image" />
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="home" className="home-image" />
        <h1> Explore NavBar features</h1>
        
        <Link to="/products"> <button className="shop-now-button">Shop Now</button> </Link>
      </div>
    </>



  )
}

export default Home