import mongoose from 'mongoose';

const db = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is Connected Successfully");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
