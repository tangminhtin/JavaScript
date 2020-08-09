// constant variable
const defaultResult = 0;

// variable
let currentResult = defaultResult;

// function return an integer value
function add(a, b) {
    return a + b;
}

currentResult = add(5, 6) * 10 + 2;

let calcDes = `(5 + 6) * 10 + 2`;

outputResult(currentResult, calcDes);
