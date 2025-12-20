import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import screen1 from "../../Images/screen1.jpg"
import screen2 from "../../Images/screen2.jpg"
import screen3 from "../../Images/screen3.jpg"
import screen4 from "../../Images/screen4.jpg"
import screen5 from "../../Images/screen5.jpg"


import './Home.css'


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
            <div>
              <img src={screen4}
                alt="Slide 4" className="carousel-img" />
            </div>
            <div>
              <img src={screen5}
                alt="Slide 5" className="carousel-img" />
            </div>
          </Slider>
        </section>
        </div>
        <div className="home-content">
       Master of Computer Applications (MCA) Programme
It is approved by the All India Council for Technical Education (AICTE), New Delhi. It is a full time 2 years course offered through four semesters affiliated to Osmania University Hyderabad. The college encourages the students to become Master of Computer Applications and thrive in the growing tech world. It offers the ideal base for professionals to master the art of programming languages, essential for better and faster application development. Given its broad horizon the programme will benefit professionals as well as entry-level aspirants to gain in-depth knowledge, cross-functional competency, and expertise in a forward integrating economy. Both the students and the faculty members constantly indulge in self-improvement, by exposing themselves to the latest happenings in the world of technology.

The College is equipped with dedicated and experienced faculty who continuously upgrade their skills. It highly encourages Industry Institute Interaction to bridge the gap between Industry and the Institute by fulfilling their expectations in conduction of various workshops for students on latest emerging trends and technologies, which makes the students to explore and undertake challenging tasks confidently. The MCA department has collaboration with reputed Organizations to explore, build, develop and enhance technical skills in trending technologies among faculty and students. With the Students being the singular Objective, the Institute has established excellent Infrastructure such as State-of the Art Laboratories, spacious Library with Printed and Digital Collection of Books and Journals, Sports, Girls Hostel, and other Infrastructure for Extra and Co-Curricular Engagements.

Vision
To become a canter of excellence in the field of Computer Applications that produces innovative, skillful and socially responsible professionals who can contribute significantly to industry and research.

Mission
To churn out skilled individuals who are ready to innovate in the world of computer applications.

Objectives:
To provide high quality technical education to students that will enable life-long learning and build expertise in advanced technologies in Computer Science and develop the software applications as well as products for industry and societal needs.

To promote research and development by providing opportunities to solve complex problems in collaboration with industry and government agencies.

To encourage professional development of students that will inculcate ethical values and leadership skills through entrepreneurship while working with the community to address societal issues.

Attain peer-recognition as an individual, as a team member and as a team leader and pursue their profession with innovative thinking, continuous learning and as a successful citizen.

Curriculum:
Affiliated to Osmania University, the college strictly follows the syllabus prepared by the University. Semester External exams are conducted for 70 marks in each paper and 30 marks are allotted for two internals and as per University Regulations.

Our Strength:
Academic Performance of the Institution has always been exceptionally good. Pass percentage has been around 90% right from the beginning. The overall pass percentage is always higher than that of University Average.

Ultra-Modern Infrastructure:
With our ultra-modern infrastructure, upgraded computer labs, smart classrooms, lush green campus, a wide range of sports facilities, and highly professional staff, we aim at nothing less than the best. Our students are our biggest assets and we continually work to bring the most dynamic and superior quality education to our young lot. Additionally, we also have a hostel facility for girl students.

Experiential Learning:
Experiential learning includes team challenges, simulations, field work and extracurricular activities unlike the other classroom-bound styles of curriculum, experiential learning attempts to apply theories to real-world situations. In this method Professor makes student to focus on theory and helping students to examine these theories in a more practical context and encouraging students to learn by doing.
        <Link to="/products"> <button className="shop-now-button">Shop Now</button> </Link>
      </div>
    </>



  )
}

export default Home