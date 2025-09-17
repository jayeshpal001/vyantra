const express = require('express');
const erroHandler = require('./middlewares/errorHandler');
const authRouter = require('./routes/authRoutes')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express(); 
app.use(express.json());


app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))

app.use(cookieParser());
app.use('/api/users' ,authRouter);
app.use(erroHandler); 
module.exports = app; 