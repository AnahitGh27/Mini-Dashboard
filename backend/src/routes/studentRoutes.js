import express from "express";
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  searchStudents,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.get("/search", searchStudents);

export default router;
