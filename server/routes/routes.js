import express from "express";
import { addStudent, getStudents, getStudent, editStudent, deleteStudent, searchStudent } from "../controller/controller.js";

const routes = express.Router();

routes.post('/addStudent', addStudent);

routes.get('/getStudents', getStudents);

routes.get('/getStudent/:id', getStudent);

routes.post('/editStudent/:id', editStudent);

routes.delete('/deleteStudent/:id', deleteStudent);

routes.get('/searchStudent/:id', searchStudent);

export default routes;