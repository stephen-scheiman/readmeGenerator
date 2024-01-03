// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projectLicense) {
  console.log(projectLicense);
  if (projectLicense === "Gnu GPL") {
    const badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (projectLicense === "Apache") {
    const badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (projectLicense === "MIT") {
    const badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (projectLicense === "BSD") {
    const badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectLicense) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
  projectTitle,
  projectDescription,
  projectInstall,
  projectUsage,
  projectLicense,
  projectContrib,
  projectTest,
  projectGithub,
  projectEmail,
  badge,
}) => {
  return `## ${projectTitle} ${badge}
  ## Description
  ${projectDescription}
  ## Table of Contents
  ## Installation
  ${projectInstall}
  ## Usage
  ${projectUsage}
  ## License
  This project is covered under the ${projectLicense} license
  ## How to Contribute
  ${projectContrib}
  ## Tests
  ${projectTest}
  ## Questions
  If you have any questions or would like to contact me, please use one of the two below methods:\n
  http://www.github.com/${projectGithub}\n
  ${projectEmail}`;
};

module.exports = generateMarkdown;
