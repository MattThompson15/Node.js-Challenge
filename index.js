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


function generateLicenseBadge(license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
}

function generateReadmeContent(answers) {
    return `
    
# ${answers.projectTitle}

${generateLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-Tests(#tests)
-[Questions](#questions)

##Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered by the $answers.license license.  See the [License] [License] file for details.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions about this project, please contact [@${answers.githubUsername}](https://github.com/${answers.githubUsername}).  You can also reach out via email at [${answers.email}](mailto:${answers.email}).
`;
}
    
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
            const readmeContent = generateReadmeContent(answers);
            const outputFileName = 'README.md';

            writeToFile outputFileName, readmeContent;
        })
        .catch((error) => console.error(error));
    



