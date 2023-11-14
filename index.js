const express = require("express");
const app =  express();
require("dotenv").config();
const Port = process.env.PORT || 3000;

app.listen(Port, () =>{
    console.log(`server is listening at port 3000`)
})

// middleware 
app.use(express.json());

// routes

const blog = require("./routes/blog");

// mount
 app.use("/api/v1", blog);
// connecting with DB

const connectwithDB = require("./config/database");
connectwithDB();

// Default route
app.get("/", (req,res)=>{
    res.send(`<h1>HELLOO WORLD</h1>`)
})
