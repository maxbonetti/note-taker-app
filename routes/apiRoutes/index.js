//~~~~~ Setting paths for notes endpoint and all other endpoints ~~~~~//
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Failed to read file:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        try {
            const notes = JSON.parse(data);
            res.json(notes);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            return res.status(500).json({ error: "Error parsing data" });
        }
    });
});
//~~~~~POST function w/ READ and WRITE to file~~~~~//
router.post('/notes', (req, res) => {
    const newNote = { title,text, id: uuidv4() };

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

//~~~~~DELETE function~~~~~//
router.delete('/notes', (req, res) => {
    const noteId = req.params.id;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Failed to read file:', err);
            return res.status(500).json({ error: "Internal server error occured" });
        }
        // Remove the note with the given ID
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== noteId);

        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) {
                console.error(`Failed to write to file: ${err}`);
                return res.status(500).json({ error: "Internal server error occured" });
            }
            res.json({ message: "Note Deleted" });
        });
    });
});

module.exports = router;