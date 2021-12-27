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
          <div key={list.id}>
            <ReservationForm service={list} />
          </div>
        ))}
    </div>
  );
}

export default DetailedService;
