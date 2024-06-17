import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import StudentForm from "../../components/StudentForm/StudentForm.jsx";
import classes from "./EditPage.module.css";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const getStudentData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/students/${id}`
        );
        setInitialData(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    getStudentData();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/students/${id}`,
        formData
      );

      console.log("Student updated:", response.data);
      navigate("/students");
    } catch (error) {
      console.error("Error updating student:", error.response.data);
    }
  };

  if (!initialData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={`container ${classes["form-wrapper"]}`}>
      <h2 className={classes.title}>Edit Student</h2>
      <StudentForm
        type="edit"
        initialData={initialData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditPage;
