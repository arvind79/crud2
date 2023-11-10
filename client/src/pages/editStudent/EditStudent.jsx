import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import "./style.scss";
import { validateStudent } from "../../utils/formValidation";
import InputField from "../../components/inputField/InputField";
import { getStudent, editStudent } from "../../utils/api";

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

const EditStudent = () => {
  const [fetchedStudent, setFetchedStudent] = useState(studentsInitialData);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    touched,
  } = useFormik({
    initialValues: fetchedStudent,
    validationSchema: validateStudent,
    enableReinitialize: true,
    onSubmit: () => {
      editStudentInDB(values);
      alert("Student edited successfully");
      resetForm();
    },
  });

  useEffect(() => {
    const getStudentFromDB = async () => {
      const data = await getStudent(id);
      setFetchedStudent(data.data[0]);
    };
    getStudentFromDB();
  }, []);

  // const isChanged = (studentData) => {
  //   if (
  //     studentData.fullName == fetchedStudent.fullName &&
  //     studentData.rollNumber == fetchedStudent.rollNumber &&
  //     studentData.courseName == fetchedStudent.courseName &&
  //     studentData.mobileNumber == fetchedStudent.mobileNumber &&
  //     studentData.email == fetchedStudent.email
  //   ) {
  //     return false;
  //   }
  //   return true;
  // };

  const isChanged = (studentData) => {
    if(JSON.stringify(studentData) == JSON.stringify(fetchedStudent)) {
      return false;
    }

    return true;
  }

  const editStudentInDB = async (studentData) => {
    console.log("isChanged: ", isChanged(studentData))
    if (isChanged(studentData) == true) await editStudent(id, studentData);
    navigate("/students");
  };

  // console.log("fetchedStudent: ", fetchedStudent)
  // console.log("formik: ", formik)
  // console.log("values: ", values);

  return (
    <div className="edit-student-container">
      <form onSubmit={handleSubmit}>
        {inputArr.map((input) => {
          return (
            <InputField
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
              isTouched={touched}
              onBlur={handleBlur}
              error={errors[input.name]}
            />
          );
        })}
        <button type="submit">Edit Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
