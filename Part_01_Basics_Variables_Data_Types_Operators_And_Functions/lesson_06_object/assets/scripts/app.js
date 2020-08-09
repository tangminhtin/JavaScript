// constant variable
const defaultResult = 0;

// array to store log
const logEntries = [];

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
    
    // add new element into array
    // logEntries.push(enteredNumber);
    // console.log(logEntries);
    // console.log(logEntries[0]);

    // create new object
    const logEntry = {
        operation: 'ADD',
        preResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };

    // add new object into array
    logEntries.push(logEntry);
    console.log(logEntries);  
    
    // accessing object
    console.log(logEntry.operation);
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
