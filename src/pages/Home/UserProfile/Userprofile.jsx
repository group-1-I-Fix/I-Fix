import React, { useState, useRef, useEffect } from "react";
import "./userprofile.css";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function Userprofile({ setUiAvatars, setAvatarURL, avatarURL, uiavatars }) {
  let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  let allUsers = JSON.parse(localStorage.getItem("users"));

  const [firstNameState, setFirstNameState] = useState(false);
  const [firstName, setFirstName] = useState(loggedUser.firstName);
  const firstNameInput = useRef();

  const [lastNameState, setLastNameState] = useState(false);
  const [lastName, setLastName] = useState(loggedUser.lastName);
  const lastNameInput = useRef();

  const [emailState, setEmailState] = useState(false);
  const [email, setEmail] = useState(loggedUser.email);
  const emailInput = useRef();

  const [passwordState, setPasswordState] = useState(false);
  const [password, setPassword] = useState(loggedUser.password);
  const passwordInput = useRef();

  const changeFirstName = async () => {
    await setFirstNameState(!firstNameState);
    changeFocus(firstNameInput);
  };

  const changeFocus = (ref) => {
    ref.current.focus();
  };

  const changeFirstNameValue = () => {
    loggedUser.firstName = firstNameInput.current.value;
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    let filteredUsers = allUsers.filter((data) => data.id !== loggedUser.id);
    filteredUsers.push(loggedUser);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    setFirstName(firstNameInput.current.value);
    setFirstNameState(!firstNameState);
  };

  const changeLastName = async () => {
    await setLastNameState(!lastNameState);
    changeFocus(lastNameInput);
  };

  const changeLastNameValue = () => {
    loggedUser.lastName = lastNameInput.current.value;
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    let filteredUsers = allUsers.filter((data) => data.id !== loggedUser.id);
    filteredUsers.push(loggedUser);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    setLastName(lastNameInput.current.value);
    setLastNameState(!lastNameState);
  };

  const changeEmail = async () => {
    await setEmailState(!emailState);
    changeFocus(emailInput);
  };

  const changeEmailValue = () => {
    let flag = false;
    loggedUser.email = emailInput.current.value;
    for (let i = 0; i < allUsers.length; i++) {
      if (loggedUser.email === allUsers[i].email) {
        flag = true;
        Swal.fire({
          title: "Email already exists",
          text: "Please enter a different email",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
    if (flag === false) {
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

      let filteredUsers = allUsers.filter((data) => data.id !== loggedUser.id);
      filteredUsers.push(loggedUser);
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      setEmail(emailInput.current.value);
      setEmailState(!emailState);
      Swal.fire({
        title: "Email changed successfully",
        text: "Please login again",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const changePassword = async () => {
    await setPasswordState(!passwordState);
    changeFocus(passwordInput);
  };

  const changePasswordValue = () => {
    loggedUser.password = passwordInput.current.value;
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    let filteredUsers = allUsers.filter((data) => data.id !== loggedUser.id);
    filteredUsers.push(loggedUser);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    setPassword(passwordInput.current.value);
    setPasswordState(!passwordState);
  };

  useEffect(() => {
    if (loggedUser) {
      const uiavatars = require("ui-avatars");
      const avatarURL = uiavatars.generateAvatar({
        uppercase: true,

        name: `${loggedUser.firstName} ${loggedUser.lastName}`,
        background: "f3f3f3",
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
    <main className="main-cont2" id="form">
      <div className="container2">
        <div className="header2">
          <h2>Your Profile </h2>
          <img src={avatarURL} alt="user profile" />
        </div>
        <div className="double-container">
          <div className="field-container">
            <div className="div-container">
              <h2>Information</h2>
              <div
                className="centering-div"
                style={{ display: firstNameState ? "block" : "none" }}
              >
                <label>First name</label>
                <div className="edit-positioning">
                  <input
                    type="text"
                    defaultValue={firstName}
                    ref={firstNameInput}
                  />
                  <button className="done-btn" onClick={changeFirstNameValue}>
                    Done
                  </button>
                  <button className="done-btn" onClick={changeFirstName}>
                    X{" "}
                  </button>
                </div>
              </div>
              <div
                className="centering-div"
                style={{ display: firstNameState ? "none" : "block" }}
              >
                <label>First name</label>
                <div className="edit-positioning">
                  <div className="input-field">{firstName}</div>
                  <button className="edit-btn" onClick={changeFirstName}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="div-container">
              <div
                className="centering-div"
                style={{ display: lastNameState ? "block" : "none" }}
              >
                <label>Last name</label>
                <div className="edit-positioning">
                  <input
                    type="text"
                    defaultValue={lastName}
                    ref={lastNameInput}
                  />
                  <button className="done-btn" onClick={changeLastNameValue}>
                    Done
                  </button>
                  <button className="done-btn" onClick={changeLastName}>
                    X{" "}
                  </button>
                </div>
              </div>

              <div
                className="centering-div"
                style={{ display: lastNameState ? "none" : "block" }}
              >
                <label>Last name</label>
                <div className="edit-positioning">
                  <div className="input-field">{lastName}</div>
                  <button className="edit-btn" onClick={changeLastName}>
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="div-container">
              <div
                className="centering-div"
                style={{ display: emailState ? "block" : "none" }}
              >
                <label>Email</label>
                <div className="edit-positioning">
                  <input type="text" defaultValue={email} ref={emailInput} />
                  <button className="done-btn" onClick={changeEmailValue}>
                    Done
                  </button>
                  <button className="done-btn" onClick={changeEmail}>
                    X
                  </button>
                </div>
              </div>
              <div
                className="centering-div"
                style={{ display: emailState ? "none" : "block" }}
              >
                <label>Email</label>
                <div className="edit-positioning">
                  <div className="input-field">{email}</div>
                  <button className="edit-btn" onClick={changeEmail}>
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="div-container">
              <div
                className="centering-div"
                style={{ display: passwordState ? "block" : "none" }}
              >
                <label>Password</label>
                <div className="edit-positioning">
                  <input
                    type="password"
                    defaultValue={password}
                    ref={passwordInput}
                  />
                  {/* TO DO SHOW/ HIDE PASSWORD */}
                  <button className="done-btn" onClick={changePasswordValue}>
                    Done
                  </button>
                  <button className="done-btn" onClick={changePassword}>
                    X{" "}
                  </button>
                </div>
              </div>
              <div
                className="centering-div"
                style={{ display: passwordState ? "none" : "block" }}
              >
                <label>Password</label>
                <div className="edit-positioning">
                  <div className="input-field">{password}</div>
                  <button className="edit-btn" onClick={changePassword}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>Technician</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {loggedUser.appointments.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.service}</td>
                  <td>{booking.date}</td>
                  <td>{booking.startTime}</td>
                  <td>{booking.finishTime}</td>
                  <td>{booking.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </main>
  );
}

export default Userprofile;
