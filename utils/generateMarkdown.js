// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

## Description

${answers.short}

${answers.motivation}

${answers.why}

${answers.problem}

${answers.learn}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}
  
## Credits
${answers.credits}

## License
${answers.license}

## Tests
${answers.test}

## Questions
Find me on GitHub: [${answers.git}](https://github.com/${answers.git})
Email me with aditional questions: ${answers.email}

## Badges
![README-generator](https://img.shields.io/github/languages/top/jgw10713/README-generator)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

`;
}

module.exports = generateMarkdown;
