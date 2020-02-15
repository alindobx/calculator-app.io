let integer = [];
let operator = [];
let memoryStorage = [0];
let results = 0;
let currentlySelectedInteger;
let count = 0;
let getClickedOperator;
let calculatedTotal = {
  sum: 0
};

const getClearEntryButton = document.getElementById("clear-entry");
const getNumbersPlace = document.getElementById("numbers-place");

getClearEntryButton.addEventListener("click", () => {
  getNumbersPlace.innerHTML = "";
  count = 0;
  integer = [];
  operator = [];
  currentlySelectedInteger = 0;
  getClickedOperator = 0;
  calculatedTotal.sum = 0;
});

document
  .querySelector("#buttons-numbers")
  .addEventListener("click", getInteger);
document
  .querySelector("#operator-buttons")
  .addEventListener("click", getOperator);

function getInteger(e) {
  currentlySelectedInteger = e.target.value;
  integer.splice(1, 1, currentlySelectedInteger);
  integerController();
}

function getOperator(e) {
  getClickedOperator = e.target.value;
  operator.push(getClickedOperator);
  operatorController();
}

function integerController() {
  count = ++count;
  if (integer[0] === "." && count < 5) {
    displayInteger();
  } else if (
    currentlySelectedInteger !== "." &&
    currentlySelectedInteger !== "M+" &&
    currentlySelectedInteger !== "M-" &&
    currentlySelectedInteger !== "MR" &&
    currentlySelectedInteger !== "MC" &&
    count < 10 &&
    integer[0] !== "." &&
    (getClickedOperator !== "+" || "-")
  ) {
    displayInteger();
  } else if (currentlySelectedInteger === "." && count < 5) {
    displayInteger();
  } else if (integer.length <= 2 && operator.length >= 1 && currentlySelectedInteger !== "M+") {
    getNumbersPlace.innerHTML = currentlySelectedInteger;
  } else if (currentlySelectedInteger === "M+" && memoryStorage[0] === 0) {
    memoryStorage.splice(0, 1, calculatedTotal.sum);
  } else if (currentlySelectedInteger === "M+" && memoryStorage[0]) {
    const memoryStorageTotal = memoryStorage[0] + calculatedTotal.sum;
    getNumbersPlace.innerHTML = memoryStorageTotal;
  }
}

function operatorController() {
  let total = calculatedTotal.sum + parseInt(integer[1]);

  if (getClickedOperator === "+") {
    total = calculatedTotal.sum + parseInt(integer[1]);
  } else if (getClickedOperator === "-") {
    total = calculatedTotal.sum - parseInt(integer[1]);
  } else if (getClickedOperator === "*") {
    total = calculatedTotal.sum * parseInt(integer[1]);
  } else if (getClickedOperator === "/") {
    total = calculatedTotal.sum / parseInt(integer[1]);
  }

  if (integer[0] && (integer[1] && calculatedTotal.sum === 0)) {
    calculatorController(getClickedOperator);
  } else if (integer[0] && integer[1] && operator[0]) {
    console.log(total);
    calculatedTotal.sum = total;
    getNumbersPlace.innerHTML = total;
  } else {
    return null;
  }
}

function calculatorController(operatorSymbol) {
  if (operatorSymbol === "+") {
    calculate(operatorSymbol);
  } else if (operatorSymbol === "-") {
    calculate(operatorSymbol);
  } else if (operatorSymbol === "*") {
    calculate(operatorSymbol);
  } else if (operatorSymbol === "/") {
    calculate(operatorSymbol);
  } else if (operatorSymbol === "=") {
    calculate(operatorSymbol);
  }
}

function calculate(operatorSymbol) {
  const leftOperand = integer[0];
  const rightOperand = integer[1];
  const plus = parseInt(leftOperand) + parseInt(rightOperand);
  const minus = parseInt(leftOperand) - parseInt(rightOperand);
  const multiply = parseInt(leftOperand) * parseInt(rightOperand);
  const divide = parseInt(leftOperand) / parseInt(rightOperand);
  if (operatorSymbol === "+") {
    results = plus;
  } else if (operatorSymbol === "-") {
    results = minus;
  } else if (operatorSymbol === "*") {
    results = multiply;
  } else if (operatorSymbol === "/") {
    results = divide;
  } else if (operatorSymbol === "=") {
    if (operator[0] === "+") {
      results = plus;
    } else if (operator[0] === "-") {
      results = minus;
    } else if (operator[0] === "*") {
      results = minus;
    }
  }
  calculatedTotal.sum = results;
  getNumbersPlace.innerHTML = results;
}

function displayInteger() {
  getNumbersPlace.innerHTML = currentlySelectedInteger;
}

