function generateReadMe(answers) {
  return `# Title: ${answers.title}

  ![License Badge](https://img.shields.io/badge/license-${answers.license}-yellowgreen)  
    
  ## Table of Contents: 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#tests)
  * [Questions](#questions)  <br> 
  ## Description 
  ${answers.description} <br>

  ### Installation 
  ${answers.installation} <br>

  ### Usage 
  ${answers.usage} <br>
  ### License
  * ${answers.license} <br><br>

  ### Contributing 
  * ${answers.contributors}
  ### Tests 
  * ${answers.tests}
  ### Questions 
  Feel free to contact me @ [github.com/${answers.username}](https://www.github.com/${answers.username})<br>
  If you have further questions please feel free to contact me using this email address:<br>
  <${answers.questions}>
  
  `;
}

module.exports = generateReadMe