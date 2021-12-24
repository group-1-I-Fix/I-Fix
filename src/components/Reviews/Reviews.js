import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./reviews.css";

const images = [
  {
    image1: "assets/1.jpg",
    alt: "image1",
  },
  {
    image2: "assets/2.jpg",
    alt: "image2",
  },
  {
    image3: "assets/3.jpg",
    alt: "image3",
  },
];

const options = {
  // items: 1,
  navigation: true, // Show next and prev buttons
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
};

function Reviews() {
  //options for slider owl

  return (
    <>
        <div className="Services pd-y">
          <div className="section-header">
            <h2 className="section-title">Testimonial</h2>
            <span className="line"/>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-container">
                  <div className="testimonial-item ">
                    <div className="testimonial-item-perhour">
                      <img src="https://www.toolshero.com/wp-content/uploads/2020/12/mark-zuckerberg-toolshero.jpg"
                           alt="image1"/>
                    </div>
                    <p className="testimonial-list">
                      <span>Mark Zuckerberg</span>
                      <span>CEO - Facebook</span>
                      <span>The Landscaping Professionals were quick, courteous and very helpful </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="testimonial-container">
                  <div className="testimonial-item ">
                    <div className="testimonial-item-perhour">
                      <img src="https://www.toolshero.com/wp-content/uploads/2020/12/mark-zuckerberg-toolshero.jpg"
                           alt="image1"/>
                    </div>
                    <p className="testimonial-list">
                      <span>Mark Zuckerberg</span>
                      <span>CEO - Facebook</span>
                      <span>The Landscaping Professionals were quick, courteous and very helpful </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="false">&#10094;</span>
              {/*<span className="sr-only">&#10094;</span>*/}
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="false">&#10095;</span>
              {/*<span className="sr-only">&#10095;</span>*/}
            </a>
          </div>
        </div>
    </>
  );
}

export default Reviews;

/*
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
           <div className="testimonial-container">
            <div className="testimonial-item tb-effect">
              <span className="testimonial-item-text">
                {" "}
                Electricity maintenance
              </span>
              <div className="testimonial-item-perhour">
                  <img  src="https://www.toolshero.com/wp-content/uploads/2020/12/mark-zuckerberg-toolshero.jpg" alt="image1" />
              </div>
              <ul className="testimonial-list ">
                <li>General Maintenance</li>
                <li>Home Extensions</li>
                <li>24/24 Support</li>
              </ul>
              <button className="testimonial-item-purchase">Book Now</button>
            </div>
          </div>
    </div>
    <div class="carousel-item">
           <div className="testimonial-container">
            <div className="testimonial-item tb-effect">
              <span className="testimonial-item-text">
                {" "}
                Electricity maintenance
              </span>
              <div className="testimonial-item-perhour">
                  <img  src="https://www.toolshero.com/wp-content/uploads/2020/12/mark-zuckerberg-toolshero.jpg" alt="image1" />
              </div>
              <ul className="testimonial-list ">
                <li>General Maintenance</li>
                <li>Home Extensions</li>
                <li>24/24 Support</li>
              </ul>
              <button className="testimonial-item-purchase">Book Now</button>
            </div>
          </div>
    </div>
    <div class="carousel-item">
           <div className="testimonial-container">
            <div className="testimonial-item tb-effect">
              <span className="testimonial-item-text">
                {" "}
                Electricity maintenance
              </span>
              <div className="testimonial-item-perhour">
                  <img  src="https://www.toolshero.com/wp-content/uploads/2020/12/mark-zuckerberg-toolshero.jpg" alt="image1" />
              </div>
              <ul className="testimonial-list ">
                <li>General Maintenance</li>
                <li>Home Extensions</li>
                <li>24/24 Support</li>
              </ul>
              <button className="testimonial-item-purchase">Book Now</button>
            </div>
          </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
*/
