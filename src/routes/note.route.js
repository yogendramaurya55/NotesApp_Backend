import { Router } from "express";
import { createNote, getAllNotes } from "../controllers/note.controller.js";


const router = Router();

router.route("/add-note").post(createNote)
router.route("/get-all-notes").get(getAllNotes)

export default router