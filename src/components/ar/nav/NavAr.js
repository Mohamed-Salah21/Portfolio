import "./nav-ar.scss";
import "./nav-media_ar.scss";
import { NavLink } from "react-router-dom";
import SmallNavbarAr from "./sm-nav-ar/SmallNav-ar";
import React from "react";
var Nav = ({ toggleAr, setToggleAr }) => {
  return (
    <nav className={`nav-ar ${toggleAr && "stretching"}`}>
      <div className="logo">
        <h2>
          <NavLink to="/ar">M Salah</NavLink>
        </h2>
      </div>
      <div className="pages">
        <div className="links">
          <ul className="outside-ul">
            <NavLink exact to="/ar">
              الرئيسية
            </NavLink>
            <NavLink to="/ar/skills">المهارات التقنية</NavLink>
            <NavLink to="/ar/projects">المشاريع الشخصية</NavLink>
            <NavLink to="/ar/contact">اتصل بي</NavLink>
          </ul>
          <button
            className="nav-btn d-block  d-md-none"
            onClick={() => setToggleAr((boolean) => !boolean)}
          >
            {toggleAr ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
          <a href="/" className="langs-selecter">
            EN
          </a>
          <SmallNavbarAr toggleAr={toggleAr} setTogglAre={setToggleAr} />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
