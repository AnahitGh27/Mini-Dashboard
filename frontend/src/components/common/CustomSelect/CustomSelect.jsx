import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import arrow_up from "../../../assets/icons/arrow_up.svg";
import arrow_down from "../../../assets/icons/arrow_down.svg";
import classes from "./CustomSelect.module.css";

const CustomSelect = ({
  dropdownList,
  className,
  onItemClick,
  selected,
  width,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selected);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setSelectedItem(selected);
  }, [selected]);

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onItemClick(item);
  };

  const cssClass = `${classes.select} ${className ? className : ""}`;
  return (
    <div
      className={cssClass}
      style={{ minWidth: width ? width : "" }}
      ref={selectRef}
    >
      <div className={classes.selected} onClick={toggle}>
        <span>{selectedItem}</span>
        {isOpen ? (
          <img src={arrow_up} alt="arrow up icon" />
        ) : (
          <img src={arrow_down} alt="arrow down icon" />
        )}
      </div>
      <ul
        className={`${classes["select-dropdown"]} ${
          isOpen ? "" : classes.hidden
        }`}
      >
        {dropdownList.map((item) => (
          <li
            className={classes["select-item"]}
            key={uuidv4()}
            onClick={() => selectItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

CustomSelect.propTypes = {
  dropdownList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  className: PropTypes.string,
  onItemClick: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
};

export default CustomSelect;
