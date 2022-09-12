const mysql = require("mysql2");
const logo = require("asciiart-logo")
require("console.table");

//Connects to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_table_tracker"
});

//Creates the initial logo from the example given.
init()
function init() {
    const logoText = logo({
        name: "Employee Manager Module"
    }).render();
    console.log(logoText)
}

module.exports = connection;