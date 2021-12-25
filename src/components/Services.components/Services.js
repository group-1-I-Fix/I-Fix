import React from "react";
import "./Services.css";
import services from "./services.data";
function Services() {
  return (
    <div className="Services pd-y">
      <div className="section-header">
        <h2 className="section-title">What We Offer</h2>
        <span className="line" />
      </div>
      <div className="Services-container">
        {services.map((service) => (
          <div className="Services-item tb-effect" key={service.id}>
            <span className="Services-item-text">{service.title}</span>
            <div className="pricint-item-perhour">
              <h3 className="doller">$9</h3>
              <span className="hour"> /Hours</span>
            </div>
            <div className="testimonial-list">
              {service.list.map((list) => (
                <span key={list}>{list}</span>
              ))}
            </div>
            <button className="Services-item-purchase">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
