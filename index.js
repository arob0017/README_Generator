var inquirer = require("inquirer");
var fs = require('fs');
const util = require("util");

const generator = require("./generator");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
function promptUser() {
    return inquirer.prompt([
        // const questions = [
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

    ]);
};

// function to write README file
// function writeToFile(fileName, data) {
// };

// function to initialize program
async function init() {
    try {
        const answers = await promptUser();
        const readMe = generator(answers);
        await writeFileAsync("index.md", readMe)
        console.log("Successfully wrote to README!")
    } catch (err) {
        console.log(err);
    }

};

// function call to initialize program
init();
