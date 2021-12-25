import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  //const navigate = useNavigate();
  const [uiavatars, setUiAvatars] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const [state, setState] = useState(false);

  useEffect(() => {
    if (loggedUser) {
      const uiavatars = require("ui-avatars");
      const avatarURL = uiavatars.generateAvatar({
        uppercase: true,

        name: `${JSON.parse(localStorage.getItem("loggedUser")).fname} ${
          JSON.parse(localStorage.getItem("loggedUser")).lname
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

  const goToLogin = () => {
    // to bo continued
    //navigate('/')
  };

  const toggleMenu = () => {
    setState(!state);
  };

  return (
    <header className="header-Nav">
      <nav className="Navbar-header">
        <div className="Logo">
          <img src="./assets/i-FIXLOGO.png" />
        </div>
        <div className="Navbar-Links-header">
          <ul
            className={`${
              state ? "toggled-burger-menu" : ""
            } Navbar-links-list`}
          >
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="Navbar-right-header">
          <img
            className="user-profile dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            src={avatarURL}
            alt="user profile"
          />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
          <p
            className="burger-menu dropdown-toggle"
            data-bs-toggle="dropdown"
            id="dropdownMenuButton1"
            onClick={toggleMenu}
          >
            Menu
          </p>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;



