import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Progress from "./models/Progress.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT= 3000;

app.post("/progress",async(req,res) => {

try {

    const progress = new Progress(req.body);
    await progress.save();

    res.status(201).json({
        message:"Progress saved successfully",
        progress:progress
    });

}catch(error){

    res.status(400).json({
        message:"Failed to save Progress",
        error:error.message
    });
}

});

app.get("/progress",async(req,res) => {
    
    try {
        const progress = await Progress.find();
        res.json(progress);
    }catch(error){
        res.status(500).json({
            message:"Failed to fetch progress",
            error:error.message
        });
    }
});

async function connectDB(){

    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB connected succesfully");

    }catch(error){
        console.log(" MongoDB connection failed");
        console.log(error);
    }
}

connectDB();


app.listen(PORT,() => {
    console.log(`server is running on {PORT}`);
});