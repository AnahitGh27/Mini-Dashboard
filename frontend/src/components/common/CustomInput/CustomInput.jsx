import PropTypes from "prop-types";
import classes from "./CustomInput.module.css";

const CustomInput = ({
  id,
  type,
  label,
  name,
  value,
  className,
  onChange,
  onKeyDown,
  required,
}) => {
  const cssClass = `${classes["input-wrapper"]} ${className ? className : ""}`;
  return (
    <div className={cssClass}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <input
        type={type}
        className={classes.input}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        required={required}
      />
    </div>
  );
};

CustomInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  required: PropTypes.bool,
};

export default CustomInput;
