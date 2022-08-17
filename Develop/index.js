// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create a function to write README file
const generateReadme = (
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    licenseName,
    licenseColor,
    github,
    email
    ) => 
    `# ${title}

![License](https://img.shields.io/badge/license-${licenseName}-${licenseColor}.svg)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contribution)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License

The application is covered under the following license: ${licenseName}

## Contributing

${contributing}

## Tests

${tests}

## Questions

Link to my GitHub profile: [${github}](https://github.com/${github})

Email me at ${email} for further questions.`

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of your project?"
            }, {
                type: "input",
                name: "description",
                message: "Enter a description for your project."
            }, {
                type: "input",
                name: "installation",
                message: "Write down your app's installation instructions."
            }, {
                type: "input",
                name: "usage",
                message: "Write down your app's usage information?"
            }, {
                type: "input",
                name: "contributing",
                message: "Write down the contribution guidelines."
            }, {
                type: "input",
                name: "tests",
                message: "List down your test instructions."
            }, {
                type: "list",
                name: "licenseName",
                message: "Which license are you using?",
                choices: ["Apache", "MIT", "BSD"]
            }, {
                type: "input",
                name: "licenseColor",
                message: "What color will your license be?"
            }, {
                type: "input",
                name: "github",
                message: "Enter your GitHub username."
            }, {
                type: "input",
                name: "email",
                message: "What is your email address?"
            }
        ])
        .then((data) => {
            const readmeTemplate = generateReadme(
                data.title,
                data.description,
                data.installation,
                data.usage,
                data.contributing,
                data.tests,
                data.licenseName,
                data.licenseColor,
                data.github,
                data.email
            );
            
            writeToFile("README.md", readmeTemplate);
        });
}

// Function call to initialize app
init();
