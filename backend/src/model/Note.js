import mongoose, { Model, Schema } from 'mongoose'

//1 - schema
//2- model of schema


const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
content:{
    type: String,

    required: true
},
},


{
    timestamps: true //createdat, updatedat
})


const Note = mongoose.model("Note", noteSchema)
export default Note