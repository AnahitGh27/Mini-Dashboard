import PropTypes from "prop-types";
import classes from "./StudentCard.module.css";
import Button from "../common/Button/Button";

const StudentCard = ({ firstName, lastName, email, date }) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-rows-wrapper"]}>
        <div className={classes["card-rows"]}>
          <span className={classes.label}>First Name:</span>
          <span>{firstName}</span>
        </div>
        <div className={classes["card-rows"]}>
          <span className={classes.label}>Last Name:</span>
          <span>{lastName}</span>
        </div>
        <div className={classes["card-rows"]}>
          <span className={classes.label}>Email:</span>
          <span>{email}</span>
        </div>
        <div className={classes["card-rows"]}>
          <span className={classes.label}>Created At: </span>
          <span>{date}</span>
        </div>
      </div>
      <Button size="small" name="Edit" className={classes.btn} />
    </div>
  );
};

StudentCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  date: PropTypes.string,
};

export default StudentCard;
