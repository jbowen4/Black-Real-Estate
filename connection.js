const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "josh-mysql",
    database: "ProsPractice",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connection Successful");
    } else {
        console.log(err.message);
    }
});

module.exports = mysqlConnection;