import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="Services pd-y">
      <div className="section-header">
        <h2 className="section-title">What We Offer</h2>
        <span className="line"></span>
      </div>
      <div className="Services-container">
        <div className="Services-item tb-effect">
          <span className="Services-item-text"> Electricity maintenance</span>
          <div className="pricint-item-perhour">
            <h3 className="doller">$9</h3>
            <span className="hour"> /Hours</span>
          </div>
          <ul className="Services-list ">
            <li>General Maintenance</li>
            <li>Home Extensions</li>
            <li>24/7 Support</li>
          </ul>
          <button className="Services-item-purchase">Book Now</button>
        </div>
        <div className="Services-item tb-effect mg">
          <span className="Services-item-text"> pipe maintenance</span>
          <div className="pricint-item-perhour">
            <h3 className="doller">$9</h3>
            <span className="hour"> /Hours</span>
          </div>
          <ul className="Services-list">
            <li>General Maintenance</li>
            <li>Home Extensions</li>
            <li>24/7 Support</li>
          </ul>
          <button className="Services-item-purchase">Book Now</button>
        </div>
        <div className="Services-item tb-effect">
          <span className="Services-item-text"> mechanical maintenance</span>
          <div className="pricint-item-perhour">
            <h3 className="doller">$9</h3>
            <span className="hour"> /Hours</span>
          </div>
          <ul className="Services-list">
            <li>General Maintenance</li>
            <li>Home Extensions</li>
            <li>24/7 Support</li>
          </ul>
          <button className="Services-item-purchase">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
