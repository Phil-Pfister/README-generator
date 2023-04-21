

// Renders license badge or returns empty string
function renderLicenseBadge(license) {
    if (license === 'None') {
        return "";
    } else if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'GNU_GPLv3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === 'Mozilla') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === 'Apache 2.0') {
        return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'The Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    } 
}
// Renders the license link or returns empty string
function renderLicenseLink(license) {
    if (license === 'None') {
            return "";
        } else {
            return `- [License](#license)`
        }
}

// adds text to the license section
function renderLicenseSection(license) {
    if (license === 'None') {
        return "";
        } else {
        return `## License \n-------------- \nThis application uses the ${license} license`
        }
}

// takes the data returned by inquirer and adds to the template literal
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
  ${renderLicenseLink(data.license)}
    

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

  
  ${renderLicenseSection(data.license)}
  

`;
}
// exports page to be used by index.js
module.exports = generateMarkdown;
