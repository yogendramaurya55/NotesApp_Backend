import mongoose from "mongoose";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Note } from "../models/notes.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createNote = asyncHandler(async (req , res)=> {
    const {title , description , priority} = req.body;

    if(!title){
        throw new ApiError(400 , "title is compulsory");
    }

    const newNote = await Note.create({title , description , priority});
    
    const savedNote = await Note.findById(newNote._id).select();

    if(!savedNote){
        throw new ApiError(500 , "something went wrong while saving note in mongoDB")
    }

    return res
    .status(201)
    .json(new ApiResponse(200 , savedNote , "note is saved successfully "))
});


export {createNote};