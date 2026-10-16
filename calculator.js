// Basic Calculator in Node.js

/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract b from a
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide a by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Calculate modulus (remainder) of a divided by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulus(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a % b;
}

/**
 * Raise a to the power of b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function power(a, b) {
  return Math.pow(a, b);
}

/**
 * Main calculator function
 * @param {number} a - First operand
 * @param {string} operator - Operator: +, -, *, /, %, **
 * @param {number} b - Second operand
 * @returns {number}
 */
function calculate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    case '%':
      return modulus(a, b);
    case '**':
      return power(a, b);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

// --- Demo ---
const examples = [
  [10, '+', 5],
  [10, '-', 3],
  [4,  '*', 7],
  [20, '/', 4],
  [17, '%', 5],
  [2,  '**', 8],
];

console.log('=== Basic Calculator ===\n');
examples.forEach(([a, op, b]) => {
  const result = calculate(a, op, b);
  console.log(`${a} ${op} ${b} = ${result}`);
});

// Division by zero example
try {
  calculate(5, '/', 0);
} catch (err) {
  console.log(`\nError caught: ${err.message}`);
}

module.exports = { add, subtract, multiply, divide, modulus, power, calculate };
