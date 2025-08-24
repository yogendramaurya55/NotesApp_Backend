import { Router } from "express";
import { createNote } from "../controllers/note.controller.js";


const router = Router();

router.route("/addNote").post(createNote)

export default router