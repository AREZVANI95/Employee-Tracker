const inquirer = require("inquirer");
const mysql = require("mysql2");
const console = require("console.table");
const logo = require("asciiart-logo")
const {
    inherits
} = require("util");

//Creates the initial logo from the example given.
init()

function init() {
    const appLogo = logo({
        name: "Employee Manager"
    }).render();
    console.log(appLogo)
}

//Connects to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "root",
    database: "employee_table_tracker"
});

function startApp() {
    inquirer.prompt([{
            type: 'list',
            message: 'Choose one of the following:',
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'View Employees by Manager',
                'View Employees by Department',
                'Update an employee manager',
                'Exit'
            ]
        }, ])
      
        });
}