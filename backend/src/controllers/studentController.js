import bcrypt from "bcrypt";
import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
  const { email, password, firstName, lastName, age, country, city } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const student = new Student({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      age,
      country,
      city,
    });

    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find(
      {},
      "firstName lastName email createdAt"
    );

    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
