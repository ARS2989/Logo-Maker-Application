const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter Three Characters',
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'Enter Text Color',
    },
    {
      type: 'input',
      name: 'shape',
      message: 'Choose a shape: Circle, Triangle, Square',
    },
    {
      type: 'input',
      name: 'shapecolor',
      message: 'What is the color of the shape?',
    },
   
  ])
  .then((answers) => {
    const htmlPageContent = generate(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

//inquire prompts
//create function to pull svg file in a string format function rendercircle 