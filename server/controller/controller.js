import Students from "../schema/schema.js";

export const addStudent = async(request, response) => {
  const student = request.body;
  const newStudent = new Students(student);
  try {
    await newStudent.save();
    response.status(201).json(newStudent);
  } catch (error) {
    console.log("Error while adding student to db: ", error);
  }
}

export const getStudents = async (request, response) => {
  try {
    const students = await Students.find({});
    response.status(200).json(students);
  } catch (error) {
    console.log("Error while getting students from db: ", error);
  }
}

export const getStudent = async (request, response) => {
  try {
    const student = await Students.find({_id: request.params.id});
    response.status(200).json(student);
  } catch (error) {
    console.log("Error while getting student from db: ", error);
  }
}

export const editStudent = async (request, response) => {
  const student = request.body;
  const editStudent = new Students(student);
  try {
    await Students.updateOne({_id: request.params.id}, editStudent); //OR replaceOne
    response.status(201).json(editStudent);
  } catch (error) {
    console.log("Error while editing student in the db: ", error);
  }
}

export const deleteStudent = async (request, response) => {
  try {
    await Students.deleteOne({_id: request.params.id});
    response.status(201).json("User Deleted Successfully");
  } catch (error) {
    console.log("Error while deleting student in the db: ", error);
  }
}

export const searchStudent = async (request, response) => {
  console.log("request bodyy: ", request.params.id)
  const searchQuery = request.params.id;

  try {
    const isNumeric = !isNaN(searchQuery); // Check if the searchQuery is a numeric string or not

    const searchCriteria = {
      $or: [
        isNumeric ? { rollNumber: parseInt(searchQuery) } : {rollNumber: -1},
        { fullName: searchQuery },
        { courseName: { $regex: searchQuery, $options: 'i' } },
        isNumeric ? { mobileNumber: parseInt(searchQuery) } : {rollNumber: -1},
        { email: searchQuery },
      ]
    };
    const student = await Students.find(searchCriteria);
    response.status(200).json(student);
  } catch (error) {
    console.log("Error while searching student in the db: ", error);
  }
}