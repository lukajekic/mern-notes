import express from 'express'
const app = express()
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
dotenv.config()
import cors from 'cors'




app.use(cors())

app.use(express.json()) //parse json body;


import notesRouters from './routes/notesRoutes.js'
app.use(rateLimiter)

app.use('/api/notes', notesRouters)

connectDB().then(()=>{
    const PORT  = process.env.PORT || 5001;
app.listen(PORT)
})