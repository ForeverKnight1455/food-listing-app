import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export const dbconnect = async () =>{
  const mongourl = process.env.MONGO_URI;
  if (!mongourl) {
    console.error('MONGO_URI is not defined in environment variables');
    return;
  }

  try{
    console.log('Connecting to database...');
    await mongoose.connect(mongourl);
    console.log(`Connected to database at ${mongoose.connection.host}:${mongoose.connection.port}`);
    console.log('Database connected successfully');
  }
  catch(err){
    console.error('Database connection failed:', err.message);
  }
}