import React, { useState } from "react";
import "./detailed-service.css";
import { useParams, useNavigate } from "react-router-dom";
import ReservationForm from "../reservation-form/reservation-form";

function DetailedService({ services }) {
  const { title } = useParams();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const checkForUser = () => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(user);
    if (user) {
      setShowForm(true);
    } else {
      navigate("/register");
      setShowForm(false);
    }
  };
  const cancelForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      {services
        .filter((list) => list.title === title)
        .map((list) => (
          <div className="full-card" key={list.id}>
            <div className="full-card-img">
              <img src={list.icon} alt={list.title} />
            </div>
            <div className="full-card-det">
              <h2 className="full-card-title"> {list.title}</h2>
              <span className="line" />
              <p className="full-card-description">{list.description}</p>
              <div className="full-card-price-container">
                <p className="full-card-price">${list.price}/Hours</p>
              </div>
              {!showForm ? (
                <button className="full-card-btn" onClick={checkForUser}>
                  Book Now
                </button>
              ) : (
                <button className="full-card-btn" onClick={cancelForm}>
                  Cancel
                </button>
              )}
              {showForm ? <ReservationForm service={list} /> : ""}
            </div>
          </div>
        ))}
    </div>
  );
}

export default DetailedService;
