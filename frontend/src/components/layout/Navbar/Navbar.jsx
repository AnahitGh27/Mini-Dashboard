import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes["nav-bar"]}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes["list-item"]}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className={classes["list-item"]}>
            <NavLink
              to="students"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Students
            </NavLink>
          </li>
          <li className={classes["list-item"]}>
            <NavLink
              to="edit"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Edit
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
