//~~~~~ Setting paths for notes endpoint and all other endpoints ~~~~~//
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    fs.readFile('./db./db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});
//~~~~~POST function w/ READ and WRITE to file~~~~~//
router.post('/notes', (req, res) => {
    const newNote = { ...req.body, id: uuidv4() };

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

module.exports = router;