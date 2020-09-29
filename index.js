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
var generateMarkDown = require('./utils/generateMarkdown')
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

console.log(path.join(process.cwd()))
function writeToFile(fileName, data) {
    fs.writeFile (fileName, generateMarkDown(data),  () => {
    });
}


function init() {

    inquirer
        .prompt(questions)
        .then(answers => {
            console.log('answers', answers);
            writeToFile('README.md', answers)
        })
}


init();

