// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your project?"
        },
        {
            type: 'input',
            name: 'short',
            message: "Please proved a short description of what your project does.",
            
        },
        {
            type: 'input',
            name: 'motivation',
            message: "What was your motivation?",
            
        },
        {
            type: 'input',
            name: 'why',
            message: "Why did you build this project?",
            
        },
        {
            type: 'input',
            name: 'problem',
            message: "What problem does it solve?",
            
        },
        {
            type: 'input',
            name: 'learn',
            message: "What did you learn?",
            
        },
        {
            type: `input`,
            name: `installation`,
            message: `What are the steps required to install your project?`
        },
        {
            type: `input`,
            name: `usage`,
            message: `Please provide instructions and examples for use.`
        },
        {
            type: `input`,
            name: `credits`,
            message: `Please list your collaborators.`,
            default: `Currently this project has no outside collaborators.`
        },
        {
            type: `input`,
            name: `license`,
            message: `What licenses are you using in this project?`,
            default: `Currently this project is not using any licenses`,
        },
        {
            type: `input`,
            name: `test`,
            message: `Are there any tests for this project?`,
            default: `Currently this project has no tests`,
        },
        {
            type: `input`,
            name: `git`,
            message: `What is your github username?`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is your email address?`,
        },
    ]);
};

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('./yourREADME/README.md', generateMarkdown(answers)))
      .then(() => console.log('Success! Your README can be found in the yourREADME directory.'))
      .catch((err) => console.error(err));
  };
  
  init();


    // .then((answers) => {
    //     const fileName = `${answers.name}.json`;
    //     fs.writeFile(fileName, JSON.stringify(answers, null, '\t'), (error) =>
    //         !!error ? console.log(error) : console.log("Success!")
    //     );
    // });








// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
