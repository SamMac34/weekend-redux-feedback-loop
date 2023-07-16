const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST to DB
router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments)
                     VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(response => {
            console.log('Added feedback to the DB', feedback);
            res.sendStatus(201);
        }).catch(err => {
            console.log('Error posting to DB', err);
            res.sendStatus(500);
        })
});

module.exports = router;