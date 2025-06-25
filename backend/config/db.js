import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const dbconnect = async () => {
  const mongourl = process.env.MONGO_URI;
  if (!mongourl) {
    console.error('MONGO_URI is not defined in environment variables');
    console.log("Please set the MONGO_URI in your .env file");
    return;
  }

  try {
    console.log('Connecting to database...');
    await mongoose.connect(mongourl);
    console.log(`Connected to database at ${mongoose.connection.host}:${mongoose.connection.port}`);
    console.log('Database connected successfully');
  }
  
  catch(error){
    console.error('Database connection failed:', error.message);
  }
}