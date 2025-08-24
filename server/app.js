const express = require('express');
const erroHandler = require('./middlewares/errorHandler');
const authRouter = require('../utils/router')
const app = express(); 
app.use(express.json());

app.use('/user/api' ,authRouter);

app.use(erroHandler); 
module.exports = app; 