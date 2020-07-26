const express = require("express");
const mysql = require("mysql");
const mysqlConnection = require("./connection");
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));

app.use(cors());

app.listen(4000);