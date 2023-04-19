


function renderLicenseBadge(license) {
    if (license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
    } else {
        return "";
    }
}


function renderLicenseLink(license) {
    if (license) {
        return `[${license}](https://opensource.org/license/${license}/)\n`
        } else {
            return "";
        }
}


function renderLicenseSection(license) {
    if (license) {
        return `Read more about ${license} here:`
        } else {
            return "";
        }
}


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
