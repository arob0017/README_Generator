var inquirer = require("inquirer");
var fs = require('fs');
// array of questions for user
const questions = [

    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "Repo",
        message: "What is the name of your GitHub repo?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your projects title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your project"
    },
    {
        type: "input",
        name: "contents",
        message: "Please provide a table of contents"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide your installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "license",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "contributors",
        message: "If applicable, please provide contributing parties"
    },
    {
        type: "input",
        name: "tests",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "questions",
        message: "What is your GitHub username?"
    },
];

// inquirer.prompt([

// ]).then(function (data) {

//     var filename = data.name.toLowerCase().split(' ').join('') + ".json";

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

//         if (err) {
//             return console.log(err);
//         }

//         console.log("Success!");

//     });
// });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
