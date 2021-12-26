import React, { useState , useEffect } from "react";
import Userprofile from "../../pages/Home/UserProfile/Userprofile";
import "./reservation-form.css";

function ReservationForm({service}) {
  const loggedUserNow = JSON.parse(localStorage.getItem("loggedUser"))
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
  const [newSTime,setNewSTime] = useState("")
  const [newFTime,setNewFTime] = useState("")
  

  useEffect(() => {
    let newStartTime = reservation.startTime.split("");
    newStartTime.splice(2, 1);
    let newStartTimeString = newStartTime.join("");
    setNewSTime(newStartTimeString)

    let newFinishTime = reservation.finishTime.split("");
    newFinishTime.splice(2, 1);
    let newFinishTimeString = newFinishTime.join("");
    setNewFTime(newFinishTimeString)
  },[reservation.finishTime,reservation.startTime])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newStartTime = reservation.startTime.split("");
    newStartTime.splice(2, 1);
    let newStartTimeString = newStartTime.join("");
    

    let newFinishTime = reservation.finishTime.split("");
    newFinishTime.splice(2, 1);
    let newFinishTimeString = newFinishTime.join("");
  

    if (Number(newFinishTimeString) < Number(newStartTimeString)) {
      alert("please change time");
      // sweet alert end time is less than start time (please pick time)
      return;
    }

    let flag = false;

    const newTotalPrice = ((Number(newFinishTimeString) - Number(newStartTimeString)) / 100) * service.price;
    const newId = 1 + new Date();

    let newAppointment = {
      mobileNumber: reservation.mobile,
      id: newId,
      service: service.title,
      date: reservation.date,
      startTime: newStartTimeString,
      finishTime: newFinishTimeString,
      totalPrice: newTotalPrice
    };

    let newArray = appointments;
    newArray.forEach((item) => {
      if (item.date === newAppointment.date) {
        if (
          Number(newAppointment.finishTime) > Number(item.startTime) &&
          Number(newAppointment.startTime) < Number(item.finishTime)
        ) {
          alert("you cant");
          // sweet alert this time is already reserved
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
      const user = JSON.parse(localStorage.getItem("loggedUser"))
      user.appointments.push(newAppointment)
      localStorage.setItem("loggedUser" , JSON.stringify(user))
      const allUsers = JSON.parse(localStorage.getItem("users"));
      const filteredAllUsers = allUsers.filter(data => user.id !== data.id)
      filteredAllUsers.push(user);
      localStorage.setItem("users", JSON.stringify(filteredAllUsers))
      setAppointments(
        JSON.parse(localStorage.getItem(`${service.title} appointments`))
      );
      //sweet alert
    }
  };

  return (
    <div className="reservation-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type of Service: {service.title}</label>
        </div>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={loggedUserNow.firstName + " " + loggedUserNow.lastName}
            readOnly
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={loggedUserNow.email}
            readOnly
          />
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            name="mobile"
            type="tel"
            value={reservation.mobile}
            onChange={handleChange}
            required
            min="10"
          />
        </div>
        <div>
          <label>Date of Service</label>
          <input
            name="date"
            type="date"
            value={reservation.date}
            onChange={handleChange}
            required
            min="2021-12-27"
          />
        </div>
        <div>
          <label>Start Time, please choose a time after 9:00 AM</label>
          <input
            name="startTime"
            type="time"
            value={reservation.startTime}
            onChange={handleChange}
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <div>
          <label>Finish Time, please choose a time before 6:00 PM</label>
          <input
            name="finishTime"
            type="time"
            value={reservation.finishTime}
            onChange={handleChange}
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <div>
          <label>Total Price:{reservation.startTime && reservation.finishTime ? (((Number(newFTime) - Number(newSTime)) / 100) *service.price) : 0}</label>
        </div>
        <button type="submit" className="bookBtn">
          Book
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
