const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// app.get('/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// app.get('/api/notes', (req, res) => {
//     fs.readFile("./db/db.json", "utf8", (err, jsonString) => {
//         initNotes = jsonString ? JSON.parse(jsonString) : [];
//         res.json(initNotes);
//     });
// })

//Use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
