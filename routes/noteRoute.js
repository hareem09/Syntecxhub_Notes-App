const noteController = require ('../controller/note.js')
const express = require('express');
const router = express.Router();

const {
    createNote,
    getNotes,
    getNotesById,
    updateNotesById,
    deleteNotesById,
    archieveNotesById,
    unarchieveNotesById,
    softDeleteNotesById
}=noteController;

router.post('/notes',createNote);
router.get('/notes',getNotes);
router.get('/notes/:id',getNotesById);
router.put('/notes/:id',updateNotesById);
router.delete('/notes/:id',deleteNotesById);
router.put('/notes/:id/archieve',archieveNotesById);
router.put('/notes/:id/unarchieve',unarchieveNotesById);
router.put('/notes/:id/softdelete',softDeleteNotesById);

module.exports=router;