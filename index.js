// TODO: Include packages needed for this application
const { Console } = require('console');
const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkDown = require('./utils/generateMarkdown.js');
const util = require('util');

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
        type: 'input',
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
    fs.writeFile('fileName', 'data', (error, data) => 
    error ? console.error(error) : console.log(data))
};
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        console.log("Your responses: ", userInput);
        
        const markDown = generateMarkDown(userInput);
        console.log(markDown);

        await writeFileAsync('README.md', markDown);

    } catch (error) {
        console.log(error);
    }
    
};

// Function call to initialize app
init();
