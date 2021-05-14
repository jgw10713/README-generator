const licenseBadge = {
  Apache: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  Mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
  Boost: `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

};

function generateMarkdown(answers) {
  return `# ${answers.title}

${licenseBadge[answers.license]}

## Description

${answers.short}

${answers.motivation}

${answers.why}

${answers.problem}


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
${licenseBadge[answers.license]}
This project is covered under ${answers.license}

## Tests
${answers.test}

## Questions
Find me on GitHub: [${answers.git}](https://github.com/${answers.git})
Email me with aditional questions: ${answers.email}
`;
}

module.exports = generateMarkdown;
