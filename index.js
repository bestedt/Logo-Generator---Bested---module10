const inquirer = require('inquirer');
const fs = require('fs');
const { createSquare, createCircle, createTriangle, validateColor } = require('./Lib/shapes.js');



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

const colornames = require('colornames'); // You might need to install this package


inquirer.prompt(questions)
    .then(answers => {
        const { logoLetters, logoLettersColour, shapeChoice, logoShapeColour } = answers;

        // Use the validateColor function when validating colors
        const validLogoLettersColour = validateColor(logoLettersColour);
        const validLogoShapeColour = validateColor(logoShapeColour);

        if (validLogoLettersColour === null || validLogoShapeColour === null) {
            console.error('Invalid color input. Please use a color name or a valid hex code.');
            return;
        }

        let svgMarkup = '';

        if (shapeChoice === 'Square') {
            svgMarkup = createSquare(logoLetters, validLogoLettersColour, validLogoShapeColour);
        } else if (shapeChoice === 'Circle') {
            svgMarkup = createCircle(logoLetters, validLogoLettersColour, validLogoShapeColour);
        } else if (shapeChoice === 'Triangle') {
            svgMarkup = createTriangle(logoLetters, validLogoLettersColour, validLogoShapeColour);
        }

        fs.writeFileSync('logo.svg', svgMarkup);

        console.log('SVG file "logo.svg" has been generated successfully.');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });