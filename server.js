const inquirer = require("inquirer");
const connection = require("./db/connection")

// On connectiong to server run function.
connection.connect(function (err) {
    if (err) throw err;
    console.log("Succesfully Connected");
    startApp();
    
});

//Starts the app, Question prompt for the user.
function startApp() {
    inquirer.prompt([{
            name: "start",
            type: 'list',
            message: 'Choose one of the following:',
            choices: [
                'View All Departments',
                'View All Roles',
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
            switch (answer.start) {
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
        })
}

//View all departments
function viewAllDepartments() {
    var query = "SELECT * FROM department;"
    connection.query(query, function (err, results) {
            if (err) {
                log(("Error in retrieving your data."));
            } else {
                console.table(results);
            }
            startApp();
        }
    )
}