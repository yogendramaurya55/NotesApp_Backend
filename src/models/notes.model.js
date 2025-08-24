import mongoose, { model, Schema } from "mongoose";

const notesSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    description: {
        type: String
    },
    priority:{
        type: String,
        enum: ["Low" ,"Medium","High"],
        default : "Low"
    }
} , {timestamps: true})

export const Note = model("Note",notesSchema)
