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
    .send(savedNote)
});

const getAllNotes = asyncHandler(async (req,res)=>{
    try {
        const notes = await Note.find({} , {
            _id : 0,
            title : 1,
            description: 1,
            priority :1
        }).sort({createdAt : -1})
        
        return res
        .status(200)
        .json(new ApiResponse(200 , notes , "notes fetched successfully"))
        
    } catch (error) {
        console.log(error)
        throw new ApiError(500 , " Server is not reachable")
    }
});


export {
    createNote,
    getAllNotes
};