import React from "react";
import Swal from "sweetalert2";
import "./reviews.css";
import { Carousel } from "react-bootstrap";

const testimonial = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    designation: [
      "Mark Zuckerberg",
      "CEO-Founder",
      "The Landscaping Professionals were quick, courteous and very helpful",
    ],
  },
  {
    id: 2,
    image:
      "https://m.economictimes.com/thumb/height-450,width-600,imgsize-175942,msid-70390109/elon-musks-boring-co-raises-120-million-in-first-outside-investment.jpg",
    designation: [
      "Elon Musk",
      "CEO-Founder",
      "The Landscaping Professionals were quick, courteous and very helpful",
    ],
  },
  {
    id: 3,
    image:
      "https://assets.telegraphindia.com/telegraph/2020/Dec/1607925942_bill-gates.jpg",
    designation: [
      "Bill Gates",
      "CEO-Founder",
      "The Landscaping Professionals were quick, courteous and very helpful",
    ],
  },
];

const Reviews = () => {
  return (
    <>
      <div className="Services pd-y">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <span className="line" />
        </div>
        <Carousel variant="dark">
          {testimonial.map((item) => {
            return (
              <Carousel.Item>
                <div className="testimonial-container">
                  <div className="testimonial-item ">
                    <div className="testimonial-item-perhour">
                      <img src={item.image} alt="image1" />
                    </div>
                    <p className="testimonial-list">
                      {item.designation.map((item) => {
                        return <span>{item}</span>;
                      })}
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Reviews;
