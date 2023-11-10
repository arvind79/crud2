import * as yup from 'yup';

export const validateStudent = yup.object({
  fullName: yup.string().min(2).max(25).required("Please Enter Full Name"),
  rollNumber: yup.number().min(1).max(100).required("Please Enter Roll Number"),
  courseName: yup.string().min(2).max(25).required("Please Enter Course Name"),
  mobileNumber: yup.string().min(10).max(10).required("Please Enter Mobile Number"),
  email: yup.string().email().required("Please Enter Email"),
})