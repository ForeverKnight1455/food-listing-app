import express from 'express';  
import { dbconnect } from './config/db.js';
import productrouter from './route/product.route.js';  
import path from "path"
const app = express();
app.use(express.json());
const __dirname = path.resolve()
app.use('/api/products', productrouter);
if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"../frontend/dist")))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});
app.listen(process.env.PORT, () => {
    dbconnect();
  console.log(`Server is running on port ${process.env.PORT}`); 
    console.log(`http://localhost:${process.env.PORT}`);
});