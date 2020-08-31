const express = require("express");
const mysql = require("mysql");
const mysqlConnection = require("./connection");
const cors = require('cors');
var multer = require('multer');
var bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('uploads'));

app.use(cors());

app.use(function (req, res, next) {
    res.header('X-Frame-Options', 'SAMEORIGIN');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

var upload = multer();
app.use(upload.single());

app.use('/pros', require('./routes/pros'));

app.listen(4000);