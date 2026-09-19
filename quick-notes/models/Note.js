import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:true,
        trim:true
    },

    content:{
        type:String,
        required:true,
        trim:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Notes = mongoose.model("Notes",notesSchema);

export default Notes;