import React, { useState, useRef, useEffect } from "react";
import "./userprofile.css";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Link, useNavigate } from "react-router-dom";

function Userprofile({ setUiAvatars, setAvatarURL, avatarURL, uiavatars }) {
  let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  let navigate = useNavigate();
  let allUsers = JSON.parse(localStorage.getItem("users"));

  const [deleteItem, setDeleteItem] = useState(loggedUser.appointments);

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
        color: "5a66d7",
        bold: true,
        length: 2,
        rounded: true,
      });
      setUiAvatars(uiavatars);
      setAvatarURL(avatarURL);
    }
  });

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem("loggedUser");
        Swal.fire({
          title: "Logged out successfully",
          text: "",
          icon: "success",
        });
        navigate("/register");
      }
    });
  };

  const handleDeletion = (index, localStorageServiceKey) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        let filteredLoggedUser = loggedUser.appointments.filter(
          (data) => data.id !== index
        );
        loggedUser.appointments = filteredLoggedUser;
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        console.log(filteredLoggedUser);
        let filteredAllUsers = allUsers.filter(
          (element) => element.id !== loggedUser.id
        );
        allUsers = filteredAllUsers;
        allUsers.push(loggedUser);
        localStorage.setItem("users", JSON.stringify(allUsers));

        let localStorageKey = JSON.parse(
          localStorage.getItem(`${localStorageServiceKey} appointments`)
        );
        let filteredLocalStorageKey = localStorageKey.filter(
          (data) => data.id !== index
        );
        localStorage.setItem(
          `${localStorageServiceKey} appointments`,
          JSON.stringify(filteredLocalStorageKey)
        );

        setDeleteItem(allUsers);
      }
    });
  };

  return (
    <main className="main-cont2 pt-2" id="form">
      <div className="container2">
        <div className="header2">
          <h2>Your Profile </h2>
          <img className={'m-2'}  src={avatarURL} alt="user profile" />
          <button className="btn btn-light" onClick={handleLogout}>
            Logout
          </button>
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
          <div className="test-div">
            <h2>Reservations</h2>
            {
              /* if there is no data don't show table*/

              loggedUser.appointments.length > 0 ? (
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  className="mt-5 margin-the-table "
                >
                  <thead>
                    <tr>
                      <th>Technician</th>
                      <th>Date</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Total Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loggedUser.appointments
                      ? loggedUser.appointments.map((booking) => (
                          <tr key={booking.id}>
                            <td>{booking.service}</td>
                            <td>{booking.date}</td>
                            <td>{booking.startTime}</td>
                            <td>{booking.finishTime}</td>
                            <td>{booking.totalPrice}</td>
                            <td>
                              <i
                                className="fas fa-trash-alt text-danger"
                                onClick={() =>
                                  handleDeletion(booking.id, booking.service)
                                }
                              />
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              ) : (
                <div className="no-data-div mt-4">
                  <h3>You don't have any booking yet! </h3>
                  <Link className={"btn btn-primary mt-2"} to="/services">
                    Book Now
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default Userprofile;
