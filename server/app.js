const express = require('express');
const erroHandler = require('./middlewares/errorHandler');

const app = express(); 
app.use(express.json());


app.use(erroHandler); 
module.exports = app; 