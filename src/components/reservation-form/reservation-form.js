import React,{useState} from 'react'

function ReservationForm() {
    const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem(`${data.title} appointments`)) ? JSON.parse(localStorage.getItem("appointments")) : [] )
    const [reservation,setReservation] = useState({
        date: "",
        startTime: "",
        finishTime: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setReservation({...reservation, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(reservation.startTime)
        console.log(reservation.date)
        let newAppointment = {
            date: reservation.date,
            startTime: reservation.startTime,
            finishTime: reservation.finishTime
        }
        if(!JSON.parse(localStorage.getItem(`${data.title} appointments`))){
            localStorage.setItem(`${data.title} appointments`, JSON.stringify(newAppointment))
        }
        

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Type of Service: {data.title}</label>
                </div>
                <div>
                <label>Date of Service</label>
                <input name="date" type="date" value={reservation.date} onChange={handleChange} required />
                </div>
                <div>
                <label>Start Time, please choose a time after 9:00 AM</label>
                <input name="startTime" type="time" value={reservation.startTime} onChange={handleChange} min="09:00" max="18:00"  required/>
                </div>
                <div>
                <label>Finish Time, please choose a time before 6:00 PM</label>
                <input name="finishTime" type="time" value={reservation.finishTime} onChange={handleChange}  min="09:00" max="18:00" required/>
                </div>
                <button type='submit'>Book</button>
            </form>
        </div>
    )
}

export default ReservationForm
