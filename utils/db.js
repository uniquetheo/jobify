import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      //   useFindAndModify: false,
      //   useCreateIndex: true,
    });
    console.log("Successfully connected to database");
  } catch (error) {
    throw new Error(error);
  }
};

export default connect;
