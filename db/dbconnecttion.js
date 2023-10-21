const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('db is connected');
    }catch(e){
        console.log(e);
        console.log('error to connected  database');
    }
}

module.exports = dbConnect
