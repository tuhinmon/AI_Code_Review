const express = require('express');
const airoutes = require("./routes/ai.route");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());


app.get("/",(req,res)=>{
     res.send("Hello wrold");
})


app.use('/ai',airoutes);

module.exports = app;