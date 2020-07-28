const express = require('express');
const mysqlConnection = require("../connection");
const router = express.Router();

// Get all pros
router.get('/', async (req, res) => {
    const sql = "SELECT * from professionals";

    mysqlConnection.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    })
});

// Add a new pro
router.post('/', (req, res) => {
    let proDetails = req.body;

    const sql = `INSERT INTO professionals SET ?`;

    mysqlConnection.query(sql, proDetails, (err, rows, fields) => {
        if (!err) {
            res.send(fields);
        } else {
            console.log(err.message);
            res.send(err);
        }
    })
});

// Get a specific pro
router.get('/:id', (req, res) => {
    const sql = `SELECT * from professionals WHERE id = ${req.params.id}`;

    mysqlConnection.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    })
});

module.exports = router;