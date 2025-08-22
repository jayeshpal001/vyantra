
require('dotenv').config();
const app = require('./app');
const dbConnect = require('./config/dbConnect');

dbConnect(); 
const PORT = process.env.PORT; 

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})

