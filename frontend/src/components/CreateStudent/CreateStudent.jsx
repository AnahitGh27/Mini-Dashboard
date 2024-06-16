import { useState } from "react";
import axios from "axios";
import CustomInput from "../common/CustomInput/CustomInput";
import CustomSelect from "../common/CustomSelect/CustomSelect";
import { COUNTRIES, CITIES } from "../../utils/constants.js";
import classes from "./CreateStudent.module.css";
import Button from "../common/Button/Button.jsx";

const CreateStudent = () => {
  const initialCountry = COUNTRIES[0];
  const initialCity = CITIES[initialCountry][0];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    country: initialCountry,
    city: initialCity,
    date: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/students`,
        formData
      );
      console.log("Student created:", response.data);
      setFormData({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        age: "",
        country: initialCountry,
        city: initialCity,
        date: "",
      });
      //TODO redirect to student list page
    } catch (error) {
      console.error("Error creating student:", error.response.data);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2 className={classes.title}>Create Student</h2>
      <CustomInput
        id="email"
        label="Email:"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <CustomInput
        id="password"
        label="Password:"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <CustomInput
        id="firstName"
        label="First Name:"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <CustomInput
        id="lastName"
        label="Last Name:"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <CustomInput
        id="age"
        label="Age:"
        type="number"
        placeholder="Age"
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
      <Button
        name="Create"
        type="submit"
        className={classes["btn"]}
        size="medium"
      />
    </form>
  );
};

export default CreateStudent;
