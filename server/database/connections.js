import mongoose from "mongoose";

const connections = async() => {
  
  const URL = "mongodb+srv://arvind:arvind@crud-app2.hyzhtzg.mongodb.net/?retryWrites=true&w=majority";

  try {
    await mongoose.connect(URL);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Error while connecting with the database: ", error);
  }
}

export default connections;