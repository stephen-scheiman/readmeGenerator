// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(projectLicense) {
  if (projectLicense === "Gnu GPL") {
    const badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return badge;
  } else if (projectLicense === "Apache") {
    const badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return badge;
  } else if (projectLicense === "MIT") {
    const badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return badge;
  } else if (projectLicense === "BSD") {
    const badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    return badge;
  } else {
    const badge = "";
    return badge;
  }
}

// A function that returns the license link
function renderLicenseLink(projectLicense) {
  if (projectLicense === "Gnu GPL") {
    const licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
    return licenseLink;
  } else if (projectLicense === "Apache") {
    const licenseLink = `https://opensource.org/licenses/Apache-2.0`;
    return licenseLink;
  } else if (projectLicense === "MIT") {
    const licenseLink = `https://opensource.org/licenses/MIT`;
    return licenseLink;
  } else if (projectLicense === "BSD") {
    const licenseLink = `https://opensource.org/licenses/BSD-3-Clause`;
    return licenseLink;
  } else {
    const licenseLink = "";
    return licenseLink;
  }
}

// A function to generate markdown for README
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
}) => {
  const badge = renderLicenseBadge(projectLicense);
  const licenseLink = renderLicenseLink(projectLicense);
  return `# ${projectTitle} 
  ## Description
  ${projectDescription}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribute](#contribute)
  5. [Testing](#tests)
  6. [Questions](#questions)
  ## Installation <a name="installation"></a>
  ${projectInstall}
  ## Usage <a name="usage"></a>
  ${projectUsage}
  ## License <a name="license"></a>
  ${badge}\n
  This project is covered under the ${projectLicense} license: ${licenseLink}
  ## How to Contribute <a name="contribute"></a>
  ${projectContrib}
  ## Testing <a name="tests"></a>
  ${projectTest}
  ## Questions <a name="questions"></a>
  If you have any questions or would like to contact me, please use one of the two below methods:\n
  http://www.github.com/${projectGithub}\n
  ${projectEmail}`;
};

module.exports = generateMarkdown;
