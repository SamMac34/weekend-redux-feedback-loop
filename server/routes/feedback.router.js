const express = require('express');
const router = new express.Router();
const pool = require('./modules/pool');

router.post('/', (req, res) => {
    let newFeedback = req.body.feedbackReducer;
    let queryText =
        `INSERT INTO feedback (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [newFeedback])
}).then(res => {
    res.sendStatus(201);
}).catch(err => {
    console.log('Error Posting to DB', err);
    res.sendStatus(500);
});

module.exports = router;