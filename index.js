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
            name: "Repo",
            message: "What is the name of your GitHub repo?",
            default: "README_Generator",
        },
        {
            type: "input",
            name: "title",
            message: "What is your projects title?",
            default: "ReadMe Generator"
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
            message: "Please provide your installation instructions",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide examples of your application in use?"
        },
        {
            type: "input",
            name: "license",
            message: "What license and/or licenses were used for this project?"
        },
        {
            type: "input",
            name: "contributors",
            message: "If applicable, please provide contributing parties:"
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide tests written for your application:?"
        },
        {
            type: "input",
            name: "questions",
            message: "Please provide a question/s or anything that has not been covered in these data questions?"
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
    } catch (err) {
        console.log(err);
    }

};

// function call to initialize program
init();
