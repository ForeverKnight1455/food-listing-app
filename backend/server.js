import express from 'express';  
import { dbconnect } from './config/db.js';
import productrouter from './route/product.route.js';  

const app = express();
app.use(express.json());
app.use('/api/products', productrouter);
app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});
app.listen(process.env.PORT, () => {
    dbconnect();
  console.log(`Server is running on port ${process.env.PORT}`); 
    console.log(`http://localhost:${process.env.PORT}`);
});