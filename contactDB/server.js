
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Contact from "./models/Contact.js";

import cors from "cors";

dotenv.config();

const app= express()

app.use(express.json())
app.use(cors());

const PORT = 3000;


app.post("/submit-contact",async(req,res) => {
try {
    const contact = new Contact(req.body);

    await contact.save();

    res.status(201).json({
        message:"contact saved successfully"
    });
}catch(error){

    res.status(400).json({
        message:"Failed to save contact",
        error:error.message
    });
}
});

app.get("/contacts",async(req,res) => {
    const contacts = await Contact.findOne(
        {
            name:"xyz",

    }
);
    res.json(contacts);
});

async function connectDB(){

    try{
        await mongoose.connect(process.env.MONGO_DB_URI);

        console.log("mongo db successfull");
    }catch(error){
        console.log(" mongodb unsucessfull");
        console.log(error);
    }
}

connectDB();

app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`);
});


