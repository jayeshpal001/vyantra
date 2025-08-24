const express = require('express');
const erroHandler = require('./middlewares/errorHandler');
const authRouter = require('./routes/authRoutes')
const app = express(); 
app.use(express.json());

app.use('/api/users' ,authRouter);

app.use(erroHandler); 
module.exports = app; 