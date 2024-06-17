import axios from "axios";
import StudentForm from "../../components/StudentForm/StudentForm.jsx";
import { COUNTRIES, CITIES } from "../../utils/constants.js";
import classes from "./CreateStudent.module.css";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const navigate = useNavigate();

  const initialCountry = COUNTRIES[0];
  const initialCity = CITIES[initialCountry][0];

  const initialData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    country: initialCountry,
    city: initialCity,
    date: "",
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/students`,
        formData
      );

      console.log("Student created:", response.data);
      navigate("/students");
    } catch (error) {
      console.error("Error creating student:", error.response.data);
    }
  };

  return (
    <div className={`container ${classes["form-wrapper"]}`}>
      <h2 className={classes.title}>Create Student</h2>
      <StudentForm
        type="create"
        initialData={initialData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateStudent;
