function generateReadMe(answers) {
    return `
    
    ####Username: ${answers.username}
    ####Repository: ${answers.repo}
    \`\`\`
    ##Title: ${answers.title}
    
    ###Contents: ${answers.contents}
    ###Description ${answers.description}
    \`\`\`

    ####Installation: ${answers.installation}
    ####Usage: ${answers.usage}
    ####Contributors: * ${answers.conttributors}
    ####Tests: ${answers.tests}
    ####Questions: ${answers.questions}
  
  `;
}

module.exports = generateReadMe