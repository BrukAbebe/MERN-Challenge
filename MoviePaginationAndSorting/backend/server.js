const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb =require('./config/db');
const movieRoutes = require('./routes/movieRoutes');


dotenv.config();
const PORT = process.env.PORT|| 500;

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', movieRoutes);

app.listen(PORT,() =>{
    console.log('server is running on port ' ,PORT);
});







