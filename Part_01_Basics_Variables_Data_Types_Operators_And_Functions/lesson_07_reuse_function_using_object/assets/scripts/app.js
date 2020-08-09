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

// function wirte to log
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    // create new object
    const logEntry = {
        operation: operationIdentifier,
        preResult: prevResult,
        number: operationNumber,
        result: newResult
    };

    // add new object into array
    logEntries.push(logEntry);
    console.log(logEntries);  

    // typeof operator
    console.log(typeof logEntry);
    console.log(typeof logEntries);
    console.log(typeof 2);
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
    
    // write to log
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
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
        
    // write to log
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
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
        
    // write to log
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
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
        
    // write to log
    writeToLog('DEVIDE', initialResult, enteredNumber, currentResult);
}

// listen event click on each button and call function to calculate it
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
