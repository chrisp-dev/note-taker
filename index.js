const path = require('path');
const express = require('express');
const Note = require('./lib/note');
const Db = require('./lib/db');
const notesDB = new Db();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get('/api/notes', (req, res) => {
    const notes = notesDB.getData();

});

app.post('/api/notes', (req, res) => {
    const newNote = new Note(req.body);
    notesDB.saveData(newNote);
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
    console.log("API Listening on port " + PORT);
});