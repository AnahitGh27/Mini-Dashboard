import PropTypes from "prop-types";
import classes from "./Button.module.css";
const Button = ({ name, size, className, children, ...props }) => {
  const cssClass = `${classes.btn} ${size ? classes[size] : ""} ${
    className ? className : ""
  }`;
  return (
    <button className={cssClass} {...props}>
      {name}
      {children}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(["small", "medium"]),
  className: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
