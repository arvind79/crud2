import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import "./style.scss";
import InputField from "../../components/inputField/InputField";
import { validateStudent } from "../../utils/formValidation";
import { addStudent } from "../../utils/api";

const inputArr = [
  {
    id: 1,
    name: "fullName",
    type: "text",
    placeholder: "Please Enter Your Full Name",
    label: "Full Name",
    value: "",
  },
  {
    id: 2,
    name: "rollNumber",
    type: "number",
    placeholder: "Please Enter Your Roll Number",
    label: "Roll Number",
    value: "",
  },
  {
    id: 3,
    name: "courseName",
    type: "text",
    placeholder: "Please Enter Your Course Name",
    label: "Course Name",
    value: "",
  },
  {
    id: 4,
    name: "mobileNumber",
    type: "number",
    placeholder: "Please Enter Your Mobile Number",
    label: "Mobile Number",
    value: "",
  },
  {
    id: 5,
    name: "email",
    type: "text",
    placeholder: "Please Enter Your Email",
    label: "Email",
    value: "",
  },
];

const studentsInitialData = {
  fullName: "",
  rollNumber: "",
  courseName: "",
  mobileNumber: "",
  email: "",
};

const Home = () => {

  const navigate = useNavigate();

  const {
    values,
    touched,
    handleChange,
    resetForm,
    isSubmitting,
    handleSubmit,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: studentsInitialData,
    validationSchema: validateStudent,
    onSubmit: (values) => {
      resetForm();
      alert("Student added successfully");
      addStudentToDB(values);
    },
  });

  const addStudentToDB = async (student) => {
    await addStudent(student);
    navigate('/students');
  }

  // console.log("formik: ", formik);
  // console.log("values: ", values);
  // console.log("errors: ", errors);

  return (
    <div className="home">
      <h1>Welcome to the Students Management Portal</h1>
      <h2>Add students Details</h2>
      <form onSubmit={handleSubmit}>
        {inputArr.map((input) => {
          return (
            <InputField
              key={input.id}
              {...input}
              onChange={handleChange}
              value={values[input.name]}
              error={errors[input.name]}
              isTouched={touched[input.name]}
              onBlur={handleBlur}
            />
          );
        })}
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default Home;
