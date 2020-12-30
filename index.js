var inquirer = require("inquirer");
var fs = require('fs');
const util = require("util");


const generator = require("./generator");
const api = require("./api");



const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
function promptUser() {
    return inquirer.prompt([
        // const questions = [
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
            default: "arob0017"
        },
        {
            type: "input",
            name: "repo",
            message: "What is the name of your GitHub repo?",
            default: "README_Generator",
        },
        {
            type: "input",
            name: "title",
            message: "What is your projects title?",
            default: "ReadMe_Generator"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide your installation instructions",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide examples of your application in use?"
        },
        {
            type: "list",
            name: "license",
            message: "What license was used for this project?",
            choices: ["Apache", "MIT", "BSD", "GPL", "Mozilla", "LGPL"]
        },
        {
            type: "input",
            name: "contributors",
            message: "If applicable, please provide contributing parties:"
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide tests written for your application:"
        },
        {
            type: "input",
            name: "questions",
            message: "Please provide your email address:"
        },

    ]);
};

// function to write README file
// function writeToFile(fileName, data) {
// };

// function to initialize program
async function init() {
    try {
        const answers = await promptUser();
        // Call GitHub api for user info
        const userInfo = await api.getUser(answers);
        console.log("Your GitHub user info: ", userInfo);

        const readMe = generator(answers, userInfo);
        await writeFileAsync("index.md", readMe)
        console.log("Successfully wrote to README!")
        var licence = ""

        switch (answers.licence) {
            case "Apache":
                lience = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case "MIT":
                licence = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                break;
            case "BSD":
                licence = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
                break;
            case "GPL":
                licence = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                break;
            case "Mozilla":
                licence = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
                break;
            case "LGPL":
                licence = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
                break;


        }
    } catch (err) {
        console.log(err);
    }

};

// function call to initialize program
init();
