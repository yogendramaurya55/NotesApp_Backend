import dotenv from 'dotenv'
import { app } from './app.js'
import connectDB from './db.js/db.js'


dotenv.config({
    path: "./.env"
})



//start server
connectDB()
.then(()=>{
    app.listen(process.env.PORT , ()=>{
    console.log(`server started at : ${process.env.PORT}`)
})
})
.catch((err)=>{
    console.log("Mongo db connection flaied !!!", err)
})