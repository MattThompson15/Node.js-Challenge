// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message:'Enter your project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'GPL', 'Apache'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email adress',
    },
];
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else{
          console.log(`File ${fileName} written succesfully!`);
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent =`

        
        
}

// Function call to initialize app
init();
