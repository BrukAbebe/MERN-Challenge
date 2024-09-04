const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();


const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1); 
  }
};

module.exports = connectDb;
