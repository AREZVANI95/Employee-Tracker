const inquirer = require("inquirer");
const mysql = require("mysql2");
const logo = require("asciiart-logo")
require("console.table");

//Creates the initial logo from the example given.
init()

function init() {
    const logoText = logo({
        name: "Employee Manager Module"
    }).render();
    console.log(logoText)
}

//Connects to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_table_tracker"
});

// On connectiong to server run function.
connection.connect(function (err) {
    if (err) throw err;
    console.log("\nWelcome to the Employee Management System!\n");
    startApp();
});

//Starts the app, Question prompt for the user.
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
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "View All Departments":
                    viewAllDepartments();
                    break;

                case "View All Roles":
                    viewAllRoles();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}