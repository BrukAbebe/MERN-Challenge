const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb =require('./config/db');


dotenv.config();
const PORT = process.env.PORT|| 500;

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/' ,(req,res) =>{
res.send('hello');
})

app.listen(PORT,() =>{
    console.log('server is running on port ' ,PORT);
});







