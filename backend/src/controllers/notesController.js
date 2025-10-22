import Note from '../model/Note.js'
export async function getAllNotes  (req, res){
//send the notes

try{
    const notes = await Note.find().sort({createdAt: -1})
    res.status(200).json(notes)
}  catch (error) {
    res.status(500).json({message: "error"})
}
}
export async function getSingleNote(req, res) {
    try {
           const id = req.params.id
    const note = await Note.findById(id)
    res.status(200).json(note)
    } catch (error) {
        res.status(500)
    }
 

}
export async function createNote  (req, res){
    try {
        const {title, content} = req.body;
        const newNote = new Note({title: title, content: content})

        await newNote.save()
        res.status(201).send("Saved!")
        console.log(title,content)
    } catch (error) {
        res.status(500).send("Error occured!")
    }
}




export async function updateNote  (req, res){
try {
        const {title, content} = req.body
    await Note.findByIdAndUpdate(req.params.id, {title, content})
    res.status(200).send("Updated!")
} catch (error) {
   res.json({message: "Error occured!"}) 
}

}


export async function deleteNote  (req, res){
    try {
          const id = req.params.id;

    await Note.findByIdAndDelete(id)
    res.status(200).send("Successfully deleted Note.")
    } catch (error) {
        res.status(500).send("Error occured.")
    }
  

}


