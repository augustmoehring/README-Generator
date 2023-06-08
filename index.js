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
      type: 'checkbox',
      name: 'TableOfContents',
      message: 'What do you want inclued in your Table of Contents?',
      choices: [
        'Installation', 'Usage', 'License', 'Tests', 'FAQ'
      ],
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
const writeToFile = ({ Title, Description, TableOfContents, Installation, Usage, License, Contributing, Tests, Questions,   }) =>
`# ${Title}

## Description
  
  ${Description}

## Table of Contents
  
  ${TableOfContents}

## Installation
  
  ${Installation}

## Usage
  
  ${Usage}

## Contribution

  ${Contributing}
 
## Tests
  
  ${Tests}

## FAQ

  ${Questions}
  
## License

  ${License}`;
// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((answers) => writeFile('README.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote your README'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
