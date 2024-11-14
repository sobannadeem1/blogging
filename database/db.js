import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://soban312004:f5dX6xmCLskUCYGg@cluster0.hbeih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
