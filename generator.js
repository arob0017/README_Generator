function generateReadMe(answers) {
    return `
    
    # Title: ${answers.title}
    #### Username: ${answers.username}
    #### Repository: ${answers.repo}
    
    
    
    ### Contents: ${answers.contents}
    ### Description ${answers.description}

    
    #### Installation: ${answers.installation}
    #### Usage: ${answers.usage}
    #### Contributors: * ${answers.contributors}
    #### Tests: ${answers.tests}
    #### Questions: ${answers.questions}
  
  `;
}

module.exports = generateReadMe