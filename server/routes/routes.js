import express from "express";
import {
  addStudent,
  getStudents,
  getStudent,
  editStudent,
  deleteStudent,
  searchStudent,
  addStudents,
  deleteStudents,
} from "../controller/controller.js";

const routes = express.Router();

routes.post("/addStudent", addStudent);

routes.get("/getStudents", getStudents);

routes.get("/getStudent/:id", getStudent);

routes.post("/editStudent/:id", editStudent);

routes.delete("/deleteStudent/:id", deleteStudent);

routes.get("/searchStudent/:id", searchStudent);

routes.post("/addStudents", addStudents);

routes.delete("/deleteStudents", deleteStudents);

export default routes;
