const router = require("express").Router();
// const fs = require("fs");
const noteLog = require("../../db/db.json");
const {
  createNewNote,
  deleteNote,
  validateNote,
} = require("../../lib/notesIndex");

//GET request for notes
router.get("/notes", (req, res) => {
  let savedNotes = noteLog;
  res.json(savedNotes);
});

// router.get('/notes/:id', (req, res) => {
//   const result = findById(req.params.id, notes);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

//GET request for notes
router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  if (!validateNote(req.body)) {
    res.status(400).send("Enter both a title and content for the note.");
  } else {
    const note = createNewNote(req.body, noteLog);
    res.json(note);
  }
});
//GET request for notes
router.delete("/notes/:id", (req, res) => {
  deleteNote(noteLog, req.params.id);
  res.json(noteLog);
});

module.exports = router;
