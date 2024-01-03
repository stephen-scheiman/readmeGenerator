// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = inquirer
.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title?",
    },
    {
      type: "input",
      message: "Enter a description for your project",
      name: "projectDescription",
    },
    {
      type: "input",
      message: "Enter the installation instructions for your project",
      name: "projectInstall",
    },
    {
      type: "list",
      message: "Which license is this project covered under?",
      name: "projectLicense",
      choices: ["Gnu GPL", "Apache", "BSD", "MIT"]
    },
    {
        type: "input",
        message: "How is your project intended to be used?",
        name: "projectUsage",
      },
      {
        type: "input",
        message: "Enter instructions on how others may contribute to this project",
        name: "projectContrib",
      },
      {
        type: "input",
        message: "Enter any test instructions for the project",
        name: "projectTest",
      },
      {
        type: "input",
        message: "Enter your Github user name",
        name: "projectGithub",
      },
      {
        type: "input",
        message: "Enter your email address",
        name: "projectEmail",
      }
])
.then((answer) => {
    const markdownCode = generateMarkdown(answer);
    writeToFile("README.md", markdownCode);
});

// // TODO: Create a function to write README file
function writeToFile(fileName, markdownCode) {
fs.writeFile(fileName, markdownCode, (err) =>
err ? console.log(err) : console.log("Success!")
);
}

//TODO: Create a function to initialize app
function init() {
  questions
}

// // Function call to initialize app
init();
