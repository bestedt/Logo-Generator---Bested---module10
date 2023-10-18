// Import the inquirer, fs, and shapes modules
const path = require('path'); 
const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle, validateColor } = require('./Lib/shapes.js');
// Start of my user questions array, pretty generic questions, didn't have time to add some spice and creativity to it.
const questions = [
  {
    type: 'input',
    name: 'logoLetters',
    message: 'Please enter up to three letters for your logo?',
  },
  {
    type: 'input',
    name: 'logoLettersColour',
    message: 'Please enter the color for your logo letters (name or hex code):',
  },
  {
    type: 'list',
    name: 'shapeChoice',
    message: 'Please select the shape you want your logo to be:',
    choices: ['Square', 'Circle', 'Triangle'],
  },
  {
    type: 'input',
    name: 'logoShapeColour',
    message: 'Please enter the color for your logo shape (name or hex code):',
  },
];

const colornames = require('colornames');
// Start of my inquirer function to initiate the questions and answers via prompt
inquirer
  .prompt(questions)
  .then((answers) => {
    const { logoLetters, logoLettersColour, shapeChoice, logoShapeColour } = answers;

    const validLogoLettersColour = validateColor(logoLettersColour);
    const validLogoShapeColour = validateColor(logoShapeColour);
// First had to make sure the colour input was valid, if not it would throw an error and ask the user to input a valid colour.
    if (validLogoLettersColour === null || validLogoShapeColour === null) {
      console.error('Invalid colour input. Please use a colour name or a valid hex code.');
      return;
    }

    let svgMarkup = '';
// now that the colours are good to go we can start the shape choice. 
    if (shapeChoice === 'Square') {
      const square = new Square(logoLetters, validLogoLettersColour, validLogoShapeColour);
      svgMarkup = square.generateSVGMarkup();
    } else if (shapeChoice === 'Circle') {
      const circle = new Circle(logoLetters, validLogoLettersColour, validLogoShapeColour);
      svgMarkup = circle.generateSVGMarkup();
    } else if (shapeChoice === 'Triangle') {
      const triangle = new Triangle(logoLetters, validLogoLettersColour, validLogoShapeColour);
      svgMarkup = triangle.generateSVGMarkup();
    }

    // Specify the path to the "dist" directory and file name. Was docked points on my last challenge for not specifying the path, so I made sure to do it this time.
    const distPath = path.join(__dirname, 'dist', 'logo.svg');

    // Check if the "dist" directory exists, and create it if not
    if (!fs.existsSync(path.dirname(distPath))) {
      fs.mkdirSync(path.dirname(distPath), { recursive: true });
    }

    // Write the SVG markup to the "dist" directory
    fs.writeFileSync(distPath, svgMarkup);

    console.log('Your new logo "dist/logo.svg" has been created successfully.');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });