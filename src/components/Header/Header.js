import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./header.css";

function Header({ setUiAvatars, setAvatarURL, avatarURL, uiavatars }) {
  const navigate = useNavigate();

  let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const [state, setState] = useState(false);

  useEffect(() => {
    if (loggedUser) {
      const uiavatars = require("ui-avatars");
      const avatarURL = uiavatars.generateAvatar({
        uppercase: true,

        name: `${loggedUser.firstName} ${loggedUser.lastName}`,
        background: "f3f3f3",
        fontsize: 0.4,
        color: "5A66D7",
        bold: true,
        length: 2,
        rounded: true,
      });
      setUiAvatars(uiavatars);
      setAvatarURL(avatarURL);
    }
  });

  const toggleMenu = () => {
    setState(!state);
  };

  const signOut = () => {
    localStorage.removeItem("loggedUser");
    navigate("/register");
  };

  return (
    <header className="header-Nav ">
      <nav className="Navbar-header ">
        <div className="Logo">
          <img src="/assets/LOGO new.png" alt="" />
        </div>
        <div className="Navbar-Links-header">
          <ul
            className={`${
              state ? "toggled-burger-menu" : ""
            } Navbar-links-list`}
          >
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/aboutUs">About us</Link>
          </ul>
        </div>
        <div className="Navbar-right-header">
          {loggedUser ? (
            <>
              <img
                className="user-profile dropdown-toggle"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                src={avatarURL}
                alt="user profile"
              />
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link to="/user-profile" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={signOut} className="dropdown-item">
                    Sign out
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <button className="login-btn-header">
              <Link to="/register">Login</Link>
            </button>
          )}
          <p
            className="burger-menu "
            data-bs-toggle="dropdown"
            id="dropdownMenuButton1"
            onClick={toggleMenu}
          >
            <i className="fas fa-bars"></i>
          </p>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link to="/" className="dropdown-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="dropdown-item">
                Services
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="dropdown-item">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
