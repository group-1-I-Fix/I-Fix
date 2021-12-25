import React,{useState} from 'react'
import services from '../Services.components/services.data'
import "./reservation-form.css"

function ReservationForm() {
    
    let [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem(`${services[0].title} appointments`)) ? JSON.parse(localStorage.getItem(`${services[0].title} appointments`)) : [] )
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
        let newStartTime = reservation.startTime.split("");
        newStartTime.splice(2,1);
        let newStartTimeString = newStartTime.join("");

        let currentDate = new Date();
        currentDate.getFullYear()
        console.log(currentDate.getMonth())



        let newFinishTime = reservation.finishTime.split("");
        newFinishTime.splice(2,1);
        let newFinishTimeString = newFinishTime.join("")

        if(Number(newFinishTimeString) < Number(newStartTimeString)){
            alert("please change time")
            return;
        }

        let flag = false;

        let newAppointment = {
            date: reservation.date,
            startTime: newStartTimeString,
            finishTime: newFinishTimeString
        }

        let newArray = appointments;
        newArray.forEach(item => {
            if(item.date === newAppointment.date){
                if(Number(newAppointment.finishTime) > Number(item.startTime) && Number(newAppointment.startTime) < Number(item.finishTime)){
                    alert("you cant")
                    flag = true
                }
            }
        })

        if(!flag) {
            newArray.push(newAppointment);
            localStorage.setItem(`${services[0].title} appointments`,JSON.stringify(newArray));
            setAppointments(JSON.parse(localStorage.getItem(`${services[0].title} appointments`)))
        }
        

    }

    return (
        <div className='reservation-form-container'>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Type of Service: {services[0].title}</label>
                </div>
                <div>
                <label>Date of Service</label>
                <input name="date" type="date" value={reservation.date} onChange={handleChange} required min="2021-12-27" />
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
            {/* {appointments.map((item,ind) => <div key={ind}>
                        <p>{item.date}</p>
                        <p>{item.finishTime}</p>
                        <p>{item.startTime}</p>
                    </div>
                
            )} */}
        </div>
    )
}

export default ReservationForm
