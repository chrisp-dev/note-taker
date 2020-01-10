const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("What up?");
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.listen(PORT, () => {
    console.log("API Listening on port " + PORT);
});