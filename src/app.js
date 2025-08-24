import express from "express"
import cors from "cors"


const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



import noteRouter from "./routes/note.route.js"

app.use("/api/v1/notes" , noteRouter)

export {app}
