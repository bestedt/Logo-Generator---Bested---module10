const colornames = require('colornames');

function createSquare(logoLetters, logoLettersColour, logoShapeColour) {
    return `
        <svg width="300" height="200">
            <rect x="150" y="150" width="100" height="100" fill="${logoShapeColour}" />
            <text x="150" y="150" font-size="60" font-size="60" text-anchor="middle" fill="${logoLettersColour}">${logoLetters}</text>
        </svg>
    `;
}

function createCircle(logoLetters, logoLettersColour, logoShapeColour) {
    return `
        <svg width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${logoShapeColour}" />
            <text x="150" y="120" font-size="60" font-size="60" text-anchor="middle" fill="${logoLettersColour}">${logoLetters}</text>
        </svg>
    `;
}

function createTriangle(logoLetters, logoLettersColour, logoShapeColour) {
    return `
        <svg width="300" height="200">
            <polygon points="100,50 150,150 50,150" fill="${logoShapeColour}" />
            <text x="100" y="125" font-size="60" font-size="60" text-anchor="middle" fill="${logoLettersColour}">${logoLetters}</text>
        </svg>
    `;
}
function validateColor(input) {
    // Check if the input is a valid hex code
    if (/^#([0-9A-F]{3}){1,2}$/i.test(input)) {
        return input; // Input is a valid hex code
    }

    // Check if the input is a valid color name
    if (colornames(input)) {
        return colornames(input); // Convert color name to hex code
    }

    return null; // Invalid color input
}

module.exports = {
    createSquare,
    createCircle,
    createTriangle,
    validateColor, // Export the validateColor function
};