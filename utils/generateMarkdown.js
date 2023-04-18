// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
    if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return `[${license}](https://opensource.org/license/${license}/)\n`
        } else {
            return "";
        }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `Read more about ${license} here:`
        } else {
            return "";
        }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  -------------------
  ## Badges
  -------------------
  ${renderLicenseBadge(data.license)}  
  ## Table of Contents  
  ----------------------
  - [Description](#description) 
  - [Usage](#usage)  
  - [Installation](#installation)   
  - [Contributing](#contributing)  
  - [Questions](#questions)
  - [License](#license)   
    

  ## Description  
  -------------------
  ${data.description}

  ## Usage  
  ------------
  ${data.usage}
 
  ## Installation  
  -------------------
  ${data.installation}

  ## Credits 
  ------------------
  ${data.credits}

  ## Tests
  ------------------
  ${data.tests}

  ## Contact Information
  -------------------------
  ### Github: [${data.creator}](https://github.com/${data.github})
  ### Email: ${data.email}

  ## License
  --------------
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
