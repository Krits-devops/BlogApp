const mongoose  = require("mongoose");

require("dotenv").config();

const connectwithDB = () => { 
    mongoose.connect(process.env.DATABASE_URL,{
        useNewURlParser : true,
    })
    .then(console.log("DB Connected Succesfully"))
    .catch((err)=>{
        console.log("Issue");
        console.log(err);
        process.exit(1);
    })
};

module.exports = connectwithDB;