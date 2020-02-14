let integer  = [];
let operator = [];
let memoryStorage = [0];
let results = 0;
let currentlySelectedInteger;
let count = 0;
let getClickedOperator;
let firstNumberOperand = {
    first : 0
};

const getClearEntryButton = document.getElementById('clear-entry');
const getNumbersPlace = document.getElementById('numbers-place');

getClearEntryButton.addEventListener('click',()=>{
    getNumbersPlace.innerHTML = '';
    count = 0;
    integer = [];
    operator = [];
    currentlySelectedInteger = 0;
    getClickedOperator = 0;
    firstNumberOperand.first = 0;
});

document.querySelector("#buttons-numbers").addEventListener('click', getInteger );
document.querySelector('#operator-buttons').addEventListener('click', getOperator );

function getInteger (e) {
    currentlySelectedInteger = e.target.value;
    integer.splice(1,1,currentlySelectedInteger);
    operationSwitcher();
    console.log('Number Selected=====', currentlySelectedInteger)
}

function getOperator (e) {
   getClickedOperator = e.target.value;
    console.log('Operator Selected=====',  getClickedOperator);
    operatorController();
}

function operationSwitcher (){
    count = ++count;
    if((integer[0] ==='.') && (count < 5)){
        placeNumber()
    }else if(
        (currentlySelectedInteger !== "." )
        && (currentlySelectedInteger !== "M+")
        && (currentlySelectedInteger !== "M-")
        && (currentlySelectedInteger !== "MR")
        && (currentlySelectedInteger !== "MC")
        && (count < 10)
        && (integer[0] !== '.')
        && (getClickedOperator !== '+' || '-') ) {
        placeNumber()
    }else if( (currentlySelectedInteger === '.')
        && (count < 5) ) {
        placeNumber()
    } else if( (integer.length <= 2) && (operator.length >= 1) )  {
        getNumbersPlace.innerHTML = currentlySelectedInteger;
    }else if(currentlySelectedInteger === "M+" && (memoryStorage[0] === 0)){
        console.log('===== this was clicked',currentlySelectedInteger);
        memoryStorage.splice(0,1,firstNumberOperand.first);
    }else if(currentlySelectedInteger === "M+" && (memoryStorage[0])){
        const memoryStorageTotal = memoryStorage[0] + firstNumberOperand.first;
        getNumbersPlace.innerHTML = memoryStorageTotal
    }
}

function operatorController(){

    let total = firstNumberOperand.first + parseInt(integer[1]);

    if(getClickedOperator === '+') {
        total = firstNumberOperand.first + parseInt(integer[1]);
    }else if(getClickedOperator === '-') {
        total = firstNumberOperand.first - parseInt(integer[1]);
    }else if(getClickedOperator === '*'){
        total = firstNumberOperand.first * parseInt(integer[1]);
    }else if( getClickedOperator === '/' ){
        total = firstNumberOperand.first / parseInt(integer[1]);
    }

    if((integer[0]) && (integer[1] && (firstNumberOperand.first === 0)) ) {
        calculatorController(getClickedOperator);
   }else if( (integer[0]) && (integer[1] ) && (operator[0]) ){
       console.log(total);
       firstNumberOperand.first = total;
       getNumbersPlace.innerHTML = total;
   }else{
        return null; //pseudo -code
   }
}

function calculatorController (operatorSymbol) {
    if(operatorSymbol === '+') {
        calculate(operatorSymbol)
    }else if(operatorSymbol ==='-'){
        calculate(operatorSymbol)
    }else if(operatorSymbol ==='*'){
        calculate(operatorSymbol)
    }else if(operatorSymbol ==='/'){
        calculate(operatorSymbol)
    }else if(operatorSymbol ==='=') {
        calculate(operatorSymbol)
    }
}

function calculate(operatorSymbol){
    const leftOperand = integer[0];
    const rightOperand = integer[1];
    const plus = parseInt(leftOperand) + parseInt(rightOperand);
    const minus = parseInt(leftOperand) - parseInt(rightOperand);
    const multiply = parseInt(leftOperand) * parseInt(rightOperand);
    const divide = parseInt(leftOperand) / parseInt(rightOperand);
    if(operatorSymbol === "+") {
        results = plus;
    }else if (operatorSymbol === "-"){
        results = minus;
    }else if (operatorSymbol === "*"){
        results = multiply;
    }else if (operatorSymbol === "/"){
        results = divide;
    }else if (operatorSymbol === "=" )  {
        if(operator[0] === '+'){
            results = plus;
        }else if(operator[0] === '-'){
            results = minus;
        }else if(operator[0] === '*'){
            results = minus;
        }
    }
    firstNumberOperand.first = results;
    getNumbersPlace.innerHTML = results;
    console.log('=====Results from Add', results)
}

function placeNumber() {
    // const displayNumber = document.createElement('span');
    // displayNumber.innerHTML =  currentlySelectedInteger;
    getNumbersPlace.innerHTML = currentlySelectedInteger;
}

function getMemoryStorage(total){
    memoryStorage.push(total)
}
