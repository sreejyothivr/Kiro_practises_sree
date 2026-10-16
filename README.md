# Basic Calculator — Node.js

A simple command-line calculator built with Node.js that supports the most common arithmetic operations.

## Features

| Operation      | Operator | Example          |
|----------------|----------|------------------|
| Addition       | `+`      | `10 + 5 = 15`    |
| Subtraction    | `-`      | `10 - 3 = 7`     |
| Multiplication | `*`      | `4 * 7 = 28`     |
| Modulus        | `%`      | `17 % 5 = 2`     |
| Power          | `**`     | `2 ** 8 = 256`   |

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher

## Getting Started

### Clone the repository

```bash
git clone https://github.com/sreejyothivr/Kiro_practises_sree.git
cd Kiro_practises_sree
```

### Run the calculator

```bash
node calculator.js
```

### Expected output

```
=== Basic Calculator ===

10 + 5 = 15
10 - 3 = 7
4 * 7 = 28
17 % 5 = 2
2 ** 8 = 256
```

## Usage as a Module

You can import the calculator functions into your own Node.js project:

```js
const { add, subtract, multiply, modulus, power, calculate } = require('./calculator');

console.log(add(3, 4));              // 7
console.log(calculate(2, '**', 10)); // 1024
```

## Error Handling

- An unknown operator throws an `Error` with the message `Unknown operator: <op>`.

## Project Structure

```
Kiro_practises_sree/
├── calculator.js   # Calculator logic and demo
└── README.md       # Project documentation
```

## License

MIT
