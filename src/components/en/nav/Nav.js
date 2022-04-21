import "./nav.scss";
import "./nav-media.scss";
import { NavLink } from "react-router-dom";
import SmallNavbar from "./small_navbar/smNavbar";
import React from "react";
var Nav = ({ toggle, setToggle }) => {
  return (
    <nav className={`nav-en ${toggle && "stretching"} `}>
      <div className="logo">
        <h2>
          <NavLink to="/">M Salah</NavLink>
        </h2>
      </div>
      <div className="pages">
        <div className="links">
          <ul className="outside-ul">
            <NavLink exact to="/" id="main-page">
              Home
            </NavLink>
            <NavLink to="/skills-en" id="main-page">
              Tecknical Skills
            </NavLink>
            <NavLink to="/projects-en">Personal Projects</NavLink>
            <NavLink to="/contact-en" id="main-page">
              Contact Me
            </NavLink>
          </ul>
          <button
            className="nav-btn d-block  d-md-none"
            onClick={() => setToggle((boolean) => !boolean)}
          >
            {toggle ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
          <a href="/ar" className="langs-selecter">
            عربي
          </a>
          <SmallNavbar toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
