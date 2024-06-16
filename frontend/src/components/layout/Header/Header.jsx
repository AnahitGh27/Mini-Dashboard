import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import classes from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleHeadingClick = () => {
    navigate("/");
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.heading} onClick={handleHeadingClick}>
        Mini Dashboard
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
