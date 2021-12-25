import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import "./reviews.css";
import {Carousel} from "react-bootstrap";


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

const  Reviews = () => {
    return (
        <>
            <div className="Services pd-y">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <div className="testimonial-container">
                            <div className="testimonial-item ">
                                <div className="testimonial-item-perhour">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
                                        alt="image1"/>
                                </div>
                                <p className="testimonial-list">
                                    <span>Mark Zuckerberg</span>
                                    <span>CEO - Facebook</span>
                                    <span>The Landscaping Professionals were quick, courteous and very helpful </span>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial-container">
                            <div className="testimonial-item ">
                                <div className="testimonial-item-perhour">
                                    <img
                                        src="https://assets.telegraphindia.com/telegraph/2020/Dec/1607925942_bill-gates.jpg"
                                        alt="image1"/>
                                </div>
                                <p className="testimonial-list">
                                    <span>Bill Gates</span>
                                    <span>CEO - Microsoft</span>
                                    <span>The Landscaping Professionals were quick, courteous and very helpful </span>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial-container">
                            <div className="testimonial-item ">
                                <div className="testimonial-item-perhour">
                                    <img
                                        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                                        alt="image1"/>
                                </div>
                                <p className="testimonial-list">
                                    <span>Elon Musk</span>
                                    <span>CEO - Tesla</span>
                                    <span>The Landscaping Professionals were quick, courteous and very helpful </span>
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Reviews;
