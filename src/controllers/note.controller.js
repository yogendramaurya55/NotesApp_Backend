import mongoose from "mongoose";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Note } from "../models/notes.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createNote = asyncHandler(async (req , res)=> {
    const {noteTitle , noteDescription , notePriority} = req.body;

    if(!noteTitle){
        throw new ApiError(400 , "title is compulsory");
    }

    const newNote = await Note.create({noteTitle , noteDescription , notePriority});
    
    const savedNote = await Note.find(
        {_id : newNote._id},
        {
            _id : 0,
            noteTitle:1,
            noteDescription: 1,
            notePriority :1,
            date: 1
        }
    )

    if(!savedNote){
        throw new ApiError(500 , "something went wrong while saving note in mongoDB")
    }

    return res
    .status(201)
    .json(savedNote)
});

const getNotes = asyncHandler(async (req,res)=>{
    try {
        const notes = await Note.find(
            {},
            {
                _id:0,
                noteTitle:1,
                noteDescription:1,
                notePriority:1,
                date:1
            }
        ).sort({createdAt : -1});

        return res
        .status(200)
        .json(notes)

    } catch (error) {
        throw new ApiError(500 , "Something went wrong form server side")
    }
})



export {
    createNote,
    getNotes
};