import React, { useState, useRef, useEffect } from 'react'
import './userprofile.css'

function Userprofile() {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    const [firstNameState, setFirstNameState] = useState(false)
    const [firstName, setFirstName] = useState("hello")
    const firstNameInput = useRef();

    const [lastNameState, setLastNameState] = useState(false)
    const [lastName, setLastName] = useState("hello")
    const lastNameInput = useRef();

    const [emailState, setEmailState] = useState(false)
    const [email, setEmail] = useState("hello")
    const emailInput = useRef();

    const [passwordState, setPasswordState] = useState(false)
    const [password, setPassword] = useState("hello")
    const passwordInput = useRef();

    const [uiavatars, setUiAvatars] = useState("");
    const [avatarURL, setAvatarURL] = useState("");

    const changeFirstName = async () => {
        await setFirstNameState(!firstNameState)
        changeFocus(firstNameInput)
    }

    const changeFocus = (ref) => {
        ref.current.focus()
    }

    const changeFirstNameValue = () => {
        setFirstName(firstNameInput.current.value)
        setFirstNameState(!firstNameState)
    }

    const changeLastName = async () => {
        await setLastNameState(!lastNameState)
        changeFocus(lastNameInput)
    }

    const changeLastNameValue = () => {
        setLastName(lastNameInput.current.value)
        setLastNameState(!lastNameState)
    }

    const changeEmail = async () => {
        setEmailState(!emailState)
        changeFocus(emailInput)
    }

    const changeEmailValue = () => {
        setEmail(emailInput.current.value)
        setEmailState(!emailState)
    }

    const changePassword = async () => {
        await setPasswordState(!passwordState)
        changeFocus(passwordInput)
    }

    const changePasswordValue = () => {
        setPassword(passwordInput.current.value)
        setPasswordState(!passwordState)
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        if (loggedUser) {
            const uiavatars = require("ui-avatars");
            const avatarURL = uiavatars.generateAvatar({
                uppercase: true,

                name: `${JSON.parse(localStorage.getItem("loggedUser")).fname} ${JSON.parse(localStorage.getItem("loggedUser")).lname
                    }`,
                background: "64b5f6",
                fontsize: 0.5,
                bold: true,
                length: 2,
                rounded: true,
            });
            setUiAvatars(uiavatars);
            setAvatarURL(avatarURL);
        }
    });

    return (
        <main className="main-cont2" id='form'>
            <div className="container2">
                <div className="header2">
                    <h2>Your Profile </h2>
                    <img src={avatarURL} alt="user profile" />
                </div>

                <div className="div-container">
                    <div style={{ display: firstNameState ? 'block' : 'none' }}>
                        <label>First name</label>
                        <input type="text" defaultValue={firstName} ref={firstNameInput} />
                        <button onClick={changeFirstNameValue}>Done</button>
                        <button onClick={changeFirstName}>X </button>
                    </div>
                    <div style={{ display: firstNameState ? 'none' : 'block' }}>
                        <label>First name</label>
                        <div className="input-field">{firstName}</div>
                        <button onClick={changeFirstName}>Edit</button>
                    </div>
                </div>
                <div  className="div-container">
                    <div style={{ display: lastNameState ? 'block' : 'none' }}>
                        <label>Last name</label>
                        <input type="text" defaultValue={lastName} ref={lastNameInput} />
                        <button onClick={changeLastNameValue}>Done</button>
                        <button onClick={changeLastName}>X </button>
                    </div>

                    <div style={{ display: lastNameState ? 'none' : 'block' }}>
                        <label>last name</label>
                        <div className="input-field">{lastName}</div>
                        <button onClick={changeLastName}>Edit</button>
                    </div>
                </div>

                <div className="div-container">
                    <div style={{ display: emailState ? 'block' : 'none' }}>
                        <label>Email</label>
                        <input type="text" defaultValue={email} ref={emailInput} />
                        <button onClick={changeEmailValue}>Done</button>
                        <button onClick={changeEmail}>X </button>
                    </div>

                    <div style={{ display: emailState ? 'none' : 'block' }}>
                        <label>Email</label>
                        <div className="input-field">{email}</div>
                        <button onClick={changeEmail}>Edit</button>
                    </div>
                </div>

                <div className="div-container">
                    <div style={{ display: passwordState ? 'block' : 'none' }}>
                        <label>Password</label>
                        <input type="password" defaultValue={password} ref={passwordInput} />
                        {/* TO DO SHOW/ HIDE PASSWORD */}
                        <button onClick={changePasswordValue}>Done</button>
                        <button onClick={changePassword}>X </button>
                    </div>

                    <div style={{ display: passwordState ? 'none' : 'block' }}>
                        <label>Password</label>
                        <div className="input-field">{password}</div>
                        <button onClick={changePassword}>Edit</button>
                    </div>
                </div>



                {/* <form id="form" className="form2" >
                    <div className="form-control2">
                        <h1>ffffff</h1>
                    </div>
                    <div className="likes">
                        <i id='likesFA' className="fas fa-heart coloring"></i>
                        <small className='sml'>xx</small>
                        <div>
                        </div>
                    </div>
                </form> */}
            </div>
        </main >
    )
}

export default Userprofile
