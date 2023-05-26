// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What will the title be?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Input a description for your project.',
    },
    {
      type: 'input',
      name: 'TableOfContents',
      message: 'Input a table of contents for your project.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Input the directions for installing your project.',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Input the directions for using your project.',
    },
    {
      type: 'input',
      name: 'License',
      message: 'What license is your project using.',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who contributed to the project?',
      },
    {
      type: 'input',
      name: 'Tests',
      message: 'What are tests that can be ran with your project?',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'What are some frequently asked questions with your project?',
      },
  ])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
