import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  fullName: String,
  rollNumber: Number,
  courseName: String,
  mobileNumber: Number,
  email: String,
})

const Students = mongoose.model('Studentt', studentSchema);

export default Students;