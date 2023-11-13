/* 
   Filename: ComplexCode.js
   Description: Complex and elaborate code demonstrating advanced JavaScript concepts
*/

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Get the magnitude of the complex number
  magnitude() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  // Get the argument (angle) of the complex number in radians
  argument() {
    return Math.atan2(this.imaginary, this.real);
  }

  // Add two complex numbers
  add(other) {
    return new ComplexNumber(
      this.real + other.real,
      this.imaginary + other.imaginary
    );
  }

  // Subtract two complex numbers
  subtract(other) {
    return new ComplexNumber(
      this.real - other.real,
      this.imaginary - other.imaginary
    );
  }

  // Multiply two complex numbers
  multiply(other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(real, imaginary);
  }

  // Divide two complex numbers
  divide(other) {
    const divisor = Math.pow(other.real, 2) + Math.pow(other.imaginary, 2);
    const real = (this.real * other.real + this.imaginary * other.imaginary) / divisor;
    const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / divisor;
    return new ComplexNumber(real, imaginary);
  }
}

// Utility function to generate random integer between minValue and maxValue (inclusive)
function getRandomInteger(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

// Generate an array of random complex numbers
function generateRandomComplexNumbers(length) {
  const numbers = [];
  for (let i = 0; i < length; i++) {
    const real = getRandomInteger(-10, 10);
    const imaginary = getRandomInteger(-10, 10);
    numbers.push(new ComplexNumber(real, imaginary));
  }
  return numbers;
}

// Perform complex number operations on randomly generated complex numbers
function performComplexOperations(length) {
  const complexNumbers = generateRandomComplexNumbers(length);

  console.log(`Performing complex operations on ${length} randomly generated complex numbers:`);

  for (let i = 0; i < length - 1; i++) {
    const number1 = complexNumbers[i];
    const number2 = complexNumbers[i + 1];

    const sum = number1.add(number2);
    const difference = number1.subtract(number2);
    const product = number1.multiply(number2);
    const quotient = number1.divide(number2);

    console.log(`Complex Numbers: ${number1.real} + ${number1.imaginary}i, ${number2.real} + ${number2.imaginary}i`);
    console.log(`Sum: ${sum.real} + ${sum.imaginary}i`);
    console.log(`Difference: ${difference.real} + ${difference.imaginary}i`);
    console.log(`Product: ${product.real} + ${product.imaginary}i`);
    console.log(`Quotient: ${quotient.real} + ${quotient.imaginary}i`);
  }
}

// Run the complex number operations
performComplexOperations(10); // Generate and operate on 10 complex numbers

// ...
// More advanced and complex code...
// ...

// Export the ComplexNumber class
export default ComplexNumber;