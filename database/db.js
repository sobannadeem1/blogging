import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blogging", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
