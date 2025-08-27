import mongoose, { model, Schema } from "mongoose";
import moment from "moment"

const notesSchema = new Schema({
    noteTitle : {
        type: String,
        required : true
    },
    noteDescription: {
        type: String
    },
    notePriority:{
        type: String,
        enum: ["Low" ,"Medium","High"],
        default : "Low"
    },
    date:{
        type: String,
        default: ()=> moment().format("DD.MM.YYYY")
    }
},{timestamps:true})

export const Note = model("Note",notesSchema)
