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
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
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

//View All Departments
function viewAllDepartments() {
    var query = "SELECT * FROM department;"
    connection.query(query, function (err, results) {
        if (err) {
            log(("Error in retrieving your data."));
        } else {
            console.table(results);
        }
        startApp();
    })
}

//View All Roles
function viewAllRoles() {
    var query = "SELECT * FROM roles;"
    connection.query(query, function (err, results) {
        if (err) {
            log(("Error in retrieving your data."));
        } else {
            console.table(results);
        }
        startApp();
    })
}

//View All Employee's
function viewAllEmployees() {
    var query = "SELECT * FROM employee;"
    connection.query(query, function (err, results) {
        if (err) {
            log(("Error in retrieving your data."));
        } else {
            console.table(results);
        }
        startApp();
    })
}

//Add Department 
function addDepartment() {
    // var Dept = results.map(dept => ({name: dept.name, value: dept.id}));
    inquirer
        .prompt([{
            type: "input",
            name: "new_department",
            message: "Name of Department you wish to add?"
        }])
}

//Add Role 
function addRoles() {
    // var Roles = results.map(roles => ({name: roles.name, value: roles.id}));
    inquirer
        .prompt([{
            type: "input",
            name: "new_role",
            message: "Role to add?"
          },
          {
            type: "input",
            name: "new_salary",
            message: "Salary of role?"
          },
          {
            name: "department",
            type: "list",
            message: "Department role belongs to?",
            choices: Dept
          }
        ])
}

//Add Employee 
function addEmployee() {
    // var Empl = results.map(empl => ({name: empl.name, value: empl.id}));
    inquirer
        .prompt([{
            type: "input",
            name: "first_name",
            message: "First Name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "Last Name?"
        },
        {
            name: "role",
            type: "list",
            message: "Employee Role?",
            choices: Roles
        }
        ])
}