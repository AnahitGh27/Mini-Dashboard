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

    const studentData = await student.save();

    if (!studentData) {
      return res.status(404).json({ message: "Student not created" });
    }
    res.status(201).json({ message: "Student created" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find(
      {},
      "_id firstName lastName email createdAt"
    );

    if (!students) {
      return res.status(404).json({ message: "Students are not found" });
    }

    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(
      id,
      "_id firstName lastName email createdAt age country city"
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { email, firstName, lastName, age, country, city, date } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { email, firstName, lastName, age, country, city, date },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const searchStudents = async (req, res) => {
  const { firstName, fullName } = req.query;
  const query = {};

  if (firstName) {
    query.firstName = { $regex: new RegExp(firstName, "i") };
  }

  if (fullName) {
    const [first, last] = fullName.split(" ");
    query.firstName = { $regex: new RegExp(first, "i") };
    query.lastName = { $regex: new RegExp(last, "i") };
  }

  try {
    const students = await Student.find(query)
      .select("firstName lastName email createdAt")
      .lean()
      .exec();

    if (!students) {
      return res.status(404).json({ message: " Not found" });
    }

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
