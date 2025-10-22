import express from 'express';
const router = express.Router()
import { getAllNotes, updateNote, createNote, deleteNote, getSingleNote } from '../controllers/notesController.js'


router.get('/', getAllNotes)

router.get('/:id', getSingleNote)
router.post('/', createNote)

router.put('/:id', updateNote)

router.delete('/:id', deleteNote)


export default router;