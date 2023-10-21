const express = require("express");
const authRouter =  require('./routes/authRoutes')
const dbConnect = require("./db/dbconnecttion");
const app = express();
const  cors = require("cors");
require("dotenv").config();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

app.use(express.json());
app.use('/auth', authRouter);
const PORT = process.env.port || 5001
const start = async() => {
     try{
         await  dbConnect()
         app.listen(PORT, () => console.log(`server listen on ${PORT}`))
     }catch(e){
         console.log(e)
     }
}

start()