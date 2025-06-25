import express from 'express';  
import { dbconnect } from './config/db.js';
import productrouter from './route/product.route.js';  
import dotenv from 'dotenv';
dotenv.config()
import path from "path"

const app = express();
app.use(express.json());
const __dirname = path.resolve()//return the project directory path 
console.log("dirpath:",__dirname);
app.use('/api/products', productrouter);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
console.log("Server is running in", process.env.NODE_ENV, "mode");

app.listen(process.env.PORT, () => {
  dbconnect();
  console.log(`Server is running on port ${process.env.PORT}`); 
 console.log(`http://localhost:${process.env.PORT}`);
});