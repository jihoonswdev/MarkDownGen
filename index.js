// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkDown = require('./utils/generateMarkdown.js');
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a good description for your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['MIT', 'APACHE 2.2', 'BSD']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// TODO: Create a function to initialize app
 function init() {
    inquirer.prompt(questions).then ((response) => {
        writeToFile("README.md", generateMarkDown({ ...response }
        ))
    }) 
    
};

// Function call to initialize app
init();
