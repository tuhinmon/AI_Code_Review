require('dotenv').config()
const app  = require('./src/app');



app.listen(process.env.PORT,()=>{
     console.log("server is running port no 3000");
})