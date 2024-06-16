import axios from "axios";
import StudentCard from "../StudentCard/StudentCard";
import classes from "./StudentsList.module.css";
import { useEffect, useState } from "react";
import getReadableDate from "../../utils/getReadableDate";
import CustomInput from "../common/CustomInput/CustomInput";
import Button from "../common/Button/Button";

const StudentsList = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  const handleSearch = async () => {
    const params = {};
    searchInput.trim().split(" ").length > 1
      ? (params.fullName = searchInput.trim())
      : (params.firstName = searchInput.trim());

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/students/search`,
        { params }
      );
      setStudentsList(response.data);
    } catch (error) {
      console.error("Error searching students:", error);
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`container ${classes["list-wrapper"]}`}>
      <CustomInput
        id="search"
        name="search"
        label={<Button name="Search" size="small" onClick={handleSearch} />}
        className={classes.input}
        onChange={handleChange}
        onKeyDown={handleChange}
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
