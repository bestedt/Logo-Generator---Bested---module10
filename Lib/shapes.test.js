// Import the classes that need to be tested 

const { Square, Circle, Triangle } = require('./shapes.js'); // Unsure about the error here, but it works so I'm not going to mess with it.

// This is my first test, it checks to see if the Square class is generating valid SVG markup
describe('Shape Creation Classes', () => {
  test('Square class should generate valid SVG markup', () => {
    const square = new Square('A', 'red', 'blue');
    const svg = square.generateSVGMarkup();
    expect(svg).toContain('<rect');
    expect(svg).toContain('<text');
  });
// This tests the Circle class to see if it generates valid SVG markup
  test('Circle class should generate valid SVG markup', () => {
    const circle = new Circle('B', 'green', 'yellow');
    const svg = circle.generateSVGMarkup();
    expect(svg).toContain('<circle');
    expect(svg).toContain('<text');
  });
// This tests the Triangle class to see if it generates valid SVG markup
  test('Triangle class should generate valid SVG markup', () => {
    const triangle = new Triangle('C', 'purple', 'pink');
    const svg = triangle.generateSVGMarkup();
    expect(svg).toContain('<polygon');
    expect(svg).toContain('<text');
  });
});
//After running the tests, all three passed. Had issues with install of Jest and wouldn't recognize the script test. But after some trouble shooting it was found i missed one parenthesis in the package.json file....2 hours of trouble shooting....
