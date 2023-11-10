import axios from 'axios';

const URL = "http://localhost:8000";

export const addStudent = async(student) => {
  try {
    return await axios.post(`${URL}/addStudent`, student);
    // console.log("Student added Successfully");
  } catch (error) {
    console.log("Error while calling  addStudent api: ", error);
  }
}

export const getStudents = async() => {
  try {
    return await axios.get(`${URL}/getStudents`);
  } catch (error) {
    console.log("Error while calling getStudents api: ", error);
  }
}

export const getStudent = async(id) => {
  try {
    return await axios.get(`${URL}/getStudent/${id}`);
  } catch (error) {
    console.log("Error while calling getStudent api: ", error);
  }
}

export const editStudent = async(id, student) => {
  try {
    return  await axios.post(`${URL}/editStudent/${id}`, student);
  } catch (error) {
    console.log("Error while calling editStudent api: ", error);
  }
}

export const deleteStudent = async(id) => {
  try {
    return await axios.delete(`${URL}/deleteStudent/${id}`);
  } catch (error) {
    console.log("Error while calling deleteStudent api: ", error);
  }
}

export const searchStudent = async(query) => {
  console.log("query: ", query)
  try {
    return await axios.get(`${URL}/searchStudent/${query}`);
    // return await axios.post(`${URL}/searchStudent`, query);
  } catch (error) {
    console.log("Error while calling searchStudent api: ", error);
  }
}