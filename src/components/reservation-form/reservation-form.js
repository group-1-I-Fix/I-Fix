import React, {useState, useEffect} from "react";
import Userprofile from "../../pages/Home/UserProfile/Userprofile";
import "./reservation-form.css";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

function ReservationForm({service}) {
    let [appointments, setAppointments] = useState(
        JSON.parse(localStorage.getItem(`${service.title} appointments`))
            ? JSON.parse(localStorage.getItem(`${service.title} appointments`))
            : []
    );
    const [reservation, setReservation] = useState({
        date: "",
        startTime: "",
        finishTime: "",
    });
    const [newSTime, setNewSTime] = useState("")
    const [newFTime, setNewFTime] = useState("")


    useEffect(() => {
        let newStartTime = reservation.startTime.split("");
        newStartTime.splice(2, 1);
        let newStartTimeString = newStartTime.join("");
        setNewSTime(newStartTimeString)

        let newFinishTime = reservation.finishTime.split("");
        newFinishTime.splice(2, 1);
        let newFinishTimeString = newFinishTime.join("");
        setNewFTime(newFinishTimeString)
    }, [reservation.finishTime, reservation.startTime])


    const handleChange = (e) => {
        const {name, value} = e.target;
        setReservation({...reservation, [name]: value});

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
            Swal.fire({
                title: "Oops...",
                text: "Please pick a time that is after the start time",
                icon: "error",
                confirmButtonText: "OK"
            })
            return;
        }

        let flag = false;

        const newTotalPrice = ((Number(newFinishTimeString) - Number(newStartTimeString)) / 100) * service.price

        let newAppointment = {
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
                    Swal.fire({
                        title: "Oops...",
                        text: "Please pick a time that is not already booked",
                        icon: "error",
                        confirmButtonText: "OK"
                    })
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
            localStorage.setItem("loggedUser", JSON.stringify(user))
            const allUsers = JSON.parse(localStorage.getItem("users"));
            const filteredAllUsers = allUsers.filter(data => user.id !== data.id)
            filteredAllUsers.push(user);
            localStorage.setItem("users", JSON.stringify(filteredAllUsers))
            setAppointments(
                JSON.parse(localStorage.getItem(`${service.title} appointments`))
            );
            Swal.fire({
                title: "Success!",
                text: "Your appointment has been booked!",
                icon: "success",
                confirmButtonText: "OK"
            })
        }
    };

    return (
        <div className="reservation-form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Type of Service: {service.title}</label>
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
                    <label>Total Price:
                        {
                            reservation.startTime && reservation.finishTime ? (((Number(newFTime) - Number(newSTime)) / 100) * service.price).toFixed(2) : 0
                        }

                    </label>
                </div>
                <button type="submit" className="bookBtn">
                    Book
                </button>
            </form>
        </div>
    );
}

export default ReservationForm;
