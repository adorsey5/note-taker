const fs = require("fs");

const path = require("path");

//new note
function createNewNote(body, noteArray) {
  const note = body;
  if (!Array.isArray(noteArray)) noteArray = [];

  // if (noteArray.length === 0) noteArray.push(body);

  // body.id = noteArray[0];
  // noteArray[0]++;

  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteArray, null, 2)
  );
  return note;
}

//delete note
function deleteNote(noteArray, id) {
  let deleteID = parseInt(id);
  noteArray.splice(deleteID, 1);

  for (let i = deleteID; i < noteArray.length; i++) {
    noteArray[i].id = i.toString();
  }

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ noteArray }, null, 2)
  );
}

// ensure user has input note title and text
function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}
module.exports = {
  createNewNote,
  deleteNote,
  validateNote,
};
