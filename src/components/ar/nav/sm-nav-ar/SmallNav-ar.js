import "./smallNavbar.scss";
import { NavLink } from "react-router-dom";
var SmallNavbarAr = ({ toggleAr }) => {
  return (
    <ul
      style={{ transition: "unset" }}
      className={`sm-navbar-ar ${toggleAr && "viewing"} `}
    >
      <NavLink exact to="/ar">
        الرئيسية
      </NavLink>
      <NavLink to="/ar/skills">المهارات التقنية</NavLink>
      <NavLink to="/ar/projects">المشاريع الشخصية </NavLink>
      <NavLink to="/ar/contact">اتصل بي</NavLink>
    </ul>
  );
};
export default SmallNavbarAr;
