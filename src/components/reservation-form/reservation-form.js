import React, { useState, useEffect } from "react";
import "./reservation-form.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ReservationForm({ service }) {
  const loggedUserNow = JSON.parse(localStorage.getItem("loggedUser"));
  const navigate = useNavigate();

  let [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem(`${service.title} appointments`))
      ? JSON.parse(localStorage.getItem(`${service.title} appointments`))
      : []
  );

  const [reservation, setReservation] = useState({
    mobile: "",
    date: "",
    startTime: "",
    finishTime: "",
  });

  const [newSTime, setNewSTime] = useState("");
  const [newFTime, setNewFTime] = useState("");

  useEffect(() => {
    let newStartTime = reservation.startTime.split("");
    newStartTime.splice(2, 1);

    let newStartTimeString = newStartTime.join("");
    setNewSTime(newStartTimeString);

    let newFinishTime = reservation.finishTime.split("");
    newFinishTime.splice(2, 1);

    let newFinishTimeString = newFinishTime.join("");
    setNewFTime(newFinishTimeString);
  }, [reservation.finishTime, reservation.startTime]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loggedUserNow) {
      navigate("/register");
    } else {
      let newStartTime = reservation.startTime.split("");
      newStartTime.splice(2, 1);
      let newStartTimeString = newStartTime.join("");

      let newFinishTime = reservation.finishTime.split("");
      newFinishTime.splice(2, 1);
      let newFinishTimeString = newFinishTime.join("");

      if (Number(newFinishTimeString) < Number(newStartTimeString)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please pick a time that is after the start time",
          confirmButtonText: "OK",
        }).then(
          (r) =>
            r.value &&
            setReservation({
              date: "",
              startTime: "",
              finishTime: "",
            })
        );
        return;
      }

      let flag = false;

      const newTotalPrice =
        ((Number(newFinishTimeString) - Number(newStartTimeString)) / 100) *
        service.price;
      const newId = 1 + new Date();

      let newAppointment = {
        mobileNumber: reservation.mobile,
        id: newId,
        service: service.title,
        date: reservation.date,
        startTime: newStartTimeString,
        finishTime: newFinishTimeString,
        totalPrice: newTotalPrice,
      };

      let newArray = appointments;
      newArray.forEach((item) => {
        if (item.date === newAppointment.date) {
          if (
            Number(newAppointment.finishTime) > Number(item.startTime) &&
            Number(newAppointment.startTime) < Number(item.finishTime)
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please pick a time that is not already booked",
              confirmButtonText: "OK",
            }).then(
              (r) =>
                r.value &&
                setReservation({
                  date: "",
                  startTime: "",
                  finishTime: "",
                })
            );
            flag = true;
          }
        }
      });

      if (!flag) {
        newArray.push(newAppointment);
        localStorage.setItem(
          `${service.title} appointments`,
          JSON.stringify(newArray)
        );
        const user = JSON.parse(localStorage.getItem("loggedUser"));
        user.appointments.push(newAppointment);
        localStorage.setItem("loggedUser", JSON.stringify(user));
        const allUsers = JSON.parse(localStorage.getItem("users"));
        const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
        filteredAllUsers.push(user);
        localStorage.setItem("users", JSON.stringify(filteredAllUsers));
        setAppointments(
          JSON.parse(localStorage.getItem(`${service.title} appointments`))
        );
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your appointment has been booked!",
          confirmButtonText: "Explore more!",
        });
      }
    }
  };

  return (
    <>
      <div id="booking" className="section">
        <div className="booking-overlay">
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="booking-cta">
                    <h1>Make your reservation for {service.title}</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate laboriosam numquam at
                    </p>
                    <p>Service Price Per Hour: ${service.price}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-offset-1">
                  <div className="booking-form">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Login to Show your name"
                              value={
                                loggedUserNow
                                  ? loggedUserNow.firstName +
                                    " " +
                                    loggedUserNow.lastName
                                  : ""
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Login to Show your email"
                              value={loggedUserNow ? loggedUserNow.email : ""}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Date of Service
                            </label>
                            <input
                              className="form-control"
                              name="date"
                              value={reservation.date}
                              onChange={handleChange}
                              type="date"
                              required
                              min="2021-12-29"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="form-group">
                            <label className="form-label">Start Time</label>
                            <input
                              value={reservation.startTime}
                              onChange={handleChange}
                              className="form-control"
                              name="startTime"
                              type="time"
                              min="09:00"
                              max="18:00"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="form-group">
                            <label className="form-label">End Time</label>
                            <input
                              className="form-control"
                              name="finishTime"
                              type="time"
                              min="09:00"
                              max="18:00"
                              required
                              value={reservation.finishTime}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input
                              className="form-control"
                              type="tel"
                              required
                              placeholder={"Enter phone number"}
                              name="mobile"
                              value={reservation.mobile}
                              onChange={handleChange}
                              min="10"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Total</label>
                            <span className="form-control">
                              {reservation.startTime && reservation.finishTime
                                ? (
                                    ((Number(newFTime) - Number(newSTime)) /
                                      100) *
                                    service.price
                                  ).toFixed(2)
                                : 0}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-btn">
                        <button className="submit-btn col-lg-12">
                          Book Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
