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
        choices: ['afl-3.0', 'bsl-1.0', 'cc0-1.0', 'epl-2.0', 'none']
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
    return ''
}

function generateMarkDown(data) {
    console.log('data', data)


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

