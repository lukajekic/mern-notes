import express from 'express'
const app = express()
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
dotenv.config()
import cors from 'cors'
import path from 'path'


if (process.env.NODE_ENV !== "production") {
app.use(cors())

}

app.use(express.json()) //parse json body;


import notesRouters from './routes/notesRoutes.js'
app.use(rateLimiter)

app.use('/api/notes', notesRouters)
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, "../frontend/dist")))


if(process.env.NODE_ENV === "production") {
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, "../frontend/", "dist", "index.html"))
})
}

connectDB().then(()=>{
    const PORT  = process.env.PORT || 5001;
app.listen(PORT)
})