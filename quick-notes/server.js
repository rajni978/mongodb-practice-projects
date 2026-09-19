import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Note from "./models/Note.js"


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.post("/notes",async(req,res) => {
  
    try {
        const note = new Note(req.body);

        await note.save();
        res.status(201).json({
            message:"Notes saved successfully",
            note:note
        });
    }catch(error){
        res.status(400).json({
            message:"Failed to save note",
            error:error.message
        });

    }
});

app.get("/notes",async(req,res) => {

    try {
        const notes = await Note.find();

        res.json(notes);

    }catch(error){

        res.status(500).json({
            message:"failed to fetch notes",
            error:error.message
        });
    }
});

async function connectDB(){

    try {
    await mongoose.connect(process.env.MONGO_DB_URI);

console.log("MongoDb connected successfully");

    }catch(error){

        console.log("Failed to connect mongoDb");
        console.log(error);
    }
    
}
connectDB();

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});

