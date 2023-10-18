// Importing the colornames package to validate the users input, found it was needed to convert hex codes to color names.

const colornames = require('colornames');

// Creating a class for each shape, and a function to validate the users input. Probably could have made the code smaller by combining the classes into one, but I wanted to make sure each shape was its own class.
class Square {
    constructor(logoLetters, logoLettersColour, logoShapeColour) {
      this.logoLetters = logoLetters;
      this.logoLettersColour = logoLettersColour;
      this.logoShapeColour = logoShapeColour;
    }
  // Specicifying the SVG markup for each shape (Square)
    generateSVGMarkup() {
      return `
        <svg width="300" height="200">
            <rect x="150" y="150" width="100" height="100" fill="${this.logoShapeColour}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.logoLettersColour}">${this.logoLetters}</text>
        </svg>
      `;
    }
  }
  // Circle Class starts here 
  class Circle {
    constructor(logoLetters, logoLettersColour, logoShapeColour) {
      this.logoLetters = logoLetters;
      this.logoLettersColour = logoLettersColour;
      this.logoShapeColour = logoShapeColour;
    }
  // Specicifying the SVG markup for each shape (Circle)
    generateSVGMarkup() {
      return `
        <svg width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${this.logoShapeColour}" />
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.logoLettersColour}">${this.logoLetters}</text>
        </svg>
      `;
    }
  }
  //Start of the Triangle Class
  class Triangle {
    constructor(logoLetters, logoLettersColour, logoShapeColour) {
      this.logoLetters = logoLetters;
      this.logoLettersColour = logoLettersColour;
      this.logoShapeColour = logoShapeColour;
    }
  // Specicifying the SVG markup for each shape (Triangle)
    generateSVGMarkup() {
      return `
        <svg width="300" height="200">
            <polygon points="100,50 150,150 50,150" fill="${this.logoShapeColour}" />
            <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.logoLettersColour}">${this.logoLetters}</text>
        </svg>
      `;
    }
  }
  // Start of my validateColor function, this was actually the hardest part of the challenge. Finding out how to convert the hex codes to color names. I found the colornames package and it worked perfectly.
  function validateColor(input) {
    // This checks if the users input is a valid color
    if (/^#([0-9A-F]{3}){1,2}$/i.test(input)) {
      return input;
    }
  
    // This checks if the users input is a valid color name
    if (colornames(input)) {
      return colornames(input);
    }
    // If the input is not a valid color or color name, return null
    return null;
  }
  // Finally, exporting the classes and the validateColor function
  module.exports = {
    Square,
    Circle,
    Triangle,
    validateColor,
  };