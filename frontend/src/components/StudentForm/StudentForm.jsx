import PropTypes from "prop-types";
import { useState } from "react";
import CustomInput from "../common/CustomInput/CustomInput";
import CustomSelect from "../common/CustomSelect/CustomSelect";
import { COUNTRIES, CITIES } from "../../utils/constants.js";
import classes from "./StudentForm.module.css";
import Button from "../common/Button/Button.jsx";

const StudentForm = ({ type, initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    ...initialData,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleCountryChange = (selectedCountry) => {
    const firstCity = CITIES[selectedCountry][0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      country: selectedCountry,
      city: firstCity,
    }));
  };

  const handleCityChange = (selectedCity) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      city: selectedCity,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <CustomInput
        id="email"
        label="Email:"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <CustomInput
        id="password"
        label="Password:"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <CustomInput
        id="firstName"
        label="First Name:"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <CustomInput
        id="lastName"
        label="Last Name:"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <CustomInput
        id="age"
        label="Age:"
        type="number"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <div className={classes["select-wrapper"]}>
        <span>Country:</span>
        <CustomSelect
          dropdownList={COUNTRIES}
          selected={formData.country}
          onItemClick={handleCountryChange}
          className={classes.customSelect}
          width="83%"
        />
      </div>
      <div className={classes["select-wrapper"]}>
        <span>City:</span>
        <CustomSelect
          dropdownList={CITIES[formData.country]}
          selected={formData.city}
          onItemClick={handleCityChange}
          className={classes.customSelect}
          width="83%"
        />
      </div>
      {type === "create" ? (
        <Button
          name="Create"
          type="submit"
          className={classes["btn"]}
          size="medium"
        />
      ) : (
        <div className={classes["buttons-wrapper"]}>
          <Button
            name="Cancel"
            className={`${classes["btn"]} ${classes["btn-cancel"]}`}
            size="medium"
          />
          <Button
            name="Edit"
            type="submit"
            className={classes["btn"]}
            size="medium"
          />
        </div>
      )}
    </form>
  );
};

StudentForm.propTypes = {
  type: PropTypes.string,
  initialData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    country: PropTypes.string,
    city: PropTypes.string,
    date: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default StudentForm;
