import axios from "axios";
import StudentCard from "../StudentCard/StudentCard";
import classes from "./StudentsList.module.css";
import { useEffect, useState } from "react";
import getReadableDate from "../../utils/getReadableDate";
import CustomInput from "../common/CustomInput/CustomInput";
import Button from "../common/Button/Button";

const StudentsList = () => {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/students`
        );

        setStudentsList(response.data);
      } catch (error) {
        console.log("Error while fetching students: ", error);
      }
    };

    getStudents();
  }, []);

  return (
    <div className={`container ${classes["list-wrapper"]}`}>
      <CustomInput
        id="search"
        name="search"
        label={<Button name="Search" size="small" />}
        className={classes.input}
      />
      <div className={classes.list}>
        {studentsList.map((student) => (
          <StudentCard
            firstName={student.firstName}
            lastName={student.lastName}
            email={student.email}
            date={getReadableDate(student.createdAt)}
            key={student._id}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
