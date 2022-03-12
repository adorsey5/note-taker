const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static 
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, jsonString) => {
      newNotes = jsonString ? JSON.parse(jsonString) : [];
      res.json(newNotes);


  }); 

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
          });
        })