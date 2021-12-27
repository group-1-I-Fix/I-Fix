import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for growing your home services
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                We are a team of talented technicians making solutions for your
                home
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <Link
                    to="/services"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/banner.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
