import "./smNavbar.scss";
import { NavLink } from "react-router-dom";
var SmallNavbar = ({ toggle }) => {
  return (
    <ul
      style={{ transition: "none" }}
      className={` sm-navbar  ${toggle && "viewing"} `}
    >
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/skills-en">Tecknical Skills</NavLink>
      <NavLink to="/projects-en">Personal Projects </NavLink>
      <NavLink to="/contact-en">Contact Me</NavLink>
    </ul>
  );
};
export default SmallNavbar;
