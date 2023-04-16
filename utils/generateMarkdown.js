// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
    fs.appendFile('README.md', `https://img.shields.io/badge/license-${license}-blue`)
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        fs.appendFile('README.md', `\n![${data.license}](https://opensource.org/license/${data.license}/)\n`)
        } else {
            return "";
        }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  -------------------

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
  ${tests}

  ## Contact Information
  -------------------------
  ### Github: [${data.creator}](https://github.com/${data.github})
  ### Email: ${data.email}

  ## License
  --------------
  ${data.license}

`;
}

module.exports = generateMarkdown;
