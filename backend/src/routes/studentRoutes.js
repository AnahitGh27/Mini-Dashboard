import express from "express";
import {
  createStudent,
  getStudents,
  searchStudents,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/search", searchStudents);

export default router;
