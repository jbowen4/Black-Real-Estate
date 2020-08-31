const express = require('express');
const mysqlConnection = require("../connection");
const router = express.Router();
const upload = require('../multer');

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
router.post('/upload', (req, res) => {
    console.log(req.body);
    upload(req, res, (err) => {
        console.log(req.body);
        if (err) {
            res.send(err);
        } else {
            if (req.file == undefined) {
                console.log("JFKDLJFD");

                res.send('No file selected');
            } else {
                const { name,
                    email,
                    number,
                    type,
                    description,
                    address,
                    address2,
                    city,
                    state,
                    zipcode
                } = req.body;

                const sql = `INSERT INTO professionals 
                (name, email, number, type, description, address, address2, city, state, zipcode, image)
                VALUES (${name}, ${email}, ${number}, ${type}, ${description}, ${address}, ${address2}, ${city}
                    ${state}, ${zipcode}, ${req.file.path}`;

                mysqlConnection.query(sql, (err, rows, fields) => {
                    if (!err) {
                        console.log('no error')
                        res.send(fields);
                    } else {
                        console.log(err.message);
                        res.send(err);
                    }
                });
            }
        }
        console.log(req.body.name);

    });
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