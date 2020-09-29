// array of questions for user
// What is the title of this git hub?
// How do you insall installation?
// how to enter usage?
// how to write credits?
// What is a good License?
// Who is the Author?
var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var generateMarkdown = ("")
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this repo'
    },
    {
        type: 'input',
        name: 'installed',
        message: 'How do you insatll to make this repo work?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who you want to give credit to?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should this project have?',
        choices: ['apache', 'Boost', 'BSD', 'BSD 2-Clause License', 'none']
    },
    {
        type: 'input',
        name: 'author',
        message: 'Who is the Author?'
    },
];

// function to write README file
console.log(path.join(process.cwd()))
function writeToFile(fileName, data) {
    fs.writeFile (fileName, generateMarkDown(data),  () => {
    });
// console.log(fileName)
// console.log(data)
}
function renderBadge(license) {
        
 if (license == 'apache'){
    console.log ('apache')
return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

}else if(license == 'Boost'){
return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

}else if (license == 'BSD'){
return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'

}else if(license == 'BSD 2-Clause License'){
return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'

}else {
return
}
}

function generateMarkDown(data) {
    console.log('data', data.license)

    return (
        `
# Title: 
${data.title}
# Installed With:
${data.installed}
#🏆 We Used 
 ${data.usage}
# The Credit goes
to
 ${data.credits} 
# The license we used is
 ${data.license}
 ${renderBadge(data.license)}

# The author is 
 ${data.author}
`


    
    )
}

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        .then(answers => {
            console.log('answers', answers);
            writeToFile('README.md', answers)
        })
}

// function call to initialize program//
init();

