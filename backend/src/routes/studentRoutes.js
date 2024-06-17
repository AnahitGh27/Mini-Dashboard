import express from "express";
import {
  createStudent,
  getStudents,
  searchStudents,
  getStudentById,
  updateStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/search", searchStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);

export default router;
