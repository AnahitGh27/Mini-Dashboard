import mongoose from "mongoose";
import getDateTime from "../utils/getDateTime.js";

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: false },
  city: { type: String, required: false },
  createdAt: { type: Date, default: getDateTime },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
