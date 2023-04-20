require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./database/db');
const userRouter = require('./route/userRouter')
const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/api/user', userRouter);
app.get('/', (req,res) => {
    res.send('welcome')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})