import React from "react-dom";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <>
      <div>
        <div className="ourMission">
          <div className="section-header">
            <h2 className="section-title">About Us</h2>
            <span className="line" />
          </div>
          <p className="mission">
            We’re a housing association, social enterprise and charity with a
            turnover of over JOD430m and one of the Jordan largest providers of
            high quality housing and integrated housing, health and social care.
          </p>
        </div>
        <div className="section-header">
          <h2 className="section-title">Our Team Members</h2>
          <span className="line" />
        </div>
        <div className="Ourteam-section">
          <div className="person">
            <img
              src="../../assets/abdullah.jpg"
              alt="Abdullah"
              className="img-person"
            />
            <div className="person-title">
              <h4> Abdullah Marei</h4>
              <h6> Scrum Master</h6>
            </div>
          </div>
          <div className="person">
            <img
              src="../../assets/ghassan.png"
              alt="Ghassan"
              className="img-person"
            />
            <div className="person-title">
              <h4> Ghassan Dabak</h4>
              <h6> Product Owner</h6>
            </div>
          </div>
          <div className="person">
            <img
              src="../../assets/msallam.jpg"
              alt="Msallam"
              className="img-person"
            />
            <div className="person-title">
              <h4> Msallam Daas</h4>
              <h6> Front-end Developer</h6>
            </div>
          </div>
          <div className="person">
            <img
              src="../../assets/Ahmad.jpg"
              alt="Ahmad"
              className="img-person"
            />
            <div className="person-title">
              <h4>Ahmad Al-dabouqi</h4>
              <h6> Front-end Developer</h6>
            </div>
          </div>
          <div className="person">
            <img
              src="../../assets/Abdelkareem.jpg"
              alt="Abdulkareem"
              className="img-person"
            />
            <div className="person-title">
              <h4>Abdulkareem Aldeek</h4>
              <h6> Front-end Developer</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
