import React, {useState} from 'react'
import "./detailed-service.css"
import {useParams, useNavigate} from 'react-router-dom'
import ReservationForm from '../reservation-form/reservation-form';

function DetailedService({services}) {
    const {title} = useParams();
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate()

    const checkForUser = () => {
        const user = JSON.parse(localStorage.getItem("loggedUser"))
        console.log(user)
        if (user) {
            setShowForm(true);
        } else {
            navigate("/register")
            setShowForm(false)
        }
    }
    const cancelForm = () => {
        setShowForm(false)
    }

    return (
        <div>
            {
                services
                    .filter((list) => list.title === title)
                    .map((list) => (
                        <div className="full-card" key={list.id}>
                            <img src={list.icon} alt={list.title}/>
                            <h2>Type of Service: {list.title}</h2>
                            <p>{list.description}</p>
                            <p>${list.price}</p>
                            {!showForm ? <button onClick={checkForUser}>Book Now</button> :
                                <button onClick={cancelForm}>Cancel</button>}
                            {showForm ? <ReservationForm service={list}/> : ""}
                        </div>
                    ))}
        </div>
    )
}

export default DetailedService
