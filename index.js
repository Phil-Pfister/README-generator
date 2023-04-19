// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMark = require('./utils/generateMarkdown.js');



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
        choices: ['MIT', 'GPLv3', 'MPL_2.0', 'Apache_2.0', 'Unlicense'],
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   
    
       
        fs.writeFile(fileName, data, (err) => {
            if (err) throw err;
        });
        console.log('README created');
    }


// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
    .then((answers => {
        let readme = genMark(answers);
        writeToFile("READMEEXAMPLE.md", readme);
        }));
       
    
      
        
}


// Function call to initialize app
init();


