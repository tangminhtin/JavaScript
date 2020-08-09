// constant variable
const defaultResult = 0;

// variable
let currentResult = defaultResult;

// function get entered number from user
function getUserNumberInput() {
    return parseInt(userInput.value);   // converting data types
}

// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDes = `${currentResult} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDes);
}

// add and return an integer value
function add() {
    // store user entered number
    const enteredNumber = getUserNumberInput();

    // store previous result and calculate
    const initialResult = currentResult;
    currentResult += enteredNumber;
    
    // write output
    createAndWriteOutput('+', initialResult, enteredNumber);
}

// subtract and return an integer value
function subtract() {
    // store user entered number
    const enteredNumber = getUserNumberInput();

    // store previous result and calculate
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    
    // write output
    createAndWriteOutput('-', initialResult, enteredNumber);
}

// multiply and return an integer value
function multiply() {
    // store user entered number
    const enteredNumber = getUserNumberInput();

    // store previous result and calculate
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    
    // write output
    createAndWriteOutput('*', initialResult, enteredNumber);
}

// divide and return an integer value
function divide() {
    // store user entered number
    const enteredNumber = getUserNumberInput();

    // store previous result and calculate
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    
    // write output
    createAndWriteOutput('/', initialResult, enteredNumber);
}

// listen event click on each button and call function to calculate it
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
