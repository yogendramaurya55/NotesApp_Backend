import { Router } from "express";
import { createNote, getNotes} from "../controllers/note.controller.js";


const router = Router();

router.route("/add-note").post(createNote)
router.route("/get-all-notes").get(getNotes)


export default router