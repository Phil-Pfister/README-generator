// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'creator',
    },
    {
        type: 'input',
        message: 'What is the title of your project',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'What does your application do?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How does one use your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who helped with this application?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'How can one test your application?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'GNU GPL v3', 'Mozilla', 'Apache', 'The Unlicense'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
