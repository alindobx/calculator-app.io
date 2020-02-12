let integer  = [];
let operator = [];
let firstNumber = 0;
let results = 0;
let getClickedSymbol;
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
    getClickedSymbol = 0;
    getClickedOperator = 0;
    firstNumberOperand.first = 0;
});

document.querySelector("#buttons-numbers").addEventListener('click', selectNumbers );
document.querySelector('#operator-buttons').addEventListener('click', getOperator );

function selectNumbers (e) {
    getClickedSymbol = e.target.value;
    integer.splice(1,1,getClickedSymbol);
    operationSwitcher();
    console.log('Number Selected=====', getClickedSymbol)
    // firstNumber = firstOperand();
}
function getOperator (e) {
   getClickedOperator = e.target.value;
   operator.push(getClickedOperator);
    console.log('Operator Selected=====',  getClickedOperator);
    operatorController();
    // firstNumber = firstOperand();
}
function operationSwitcher (){
    count = ++count;
    if((integer[0] ==='.') && (count < 5)){
        placeNumber()
    }else if(
        (getClickedSymbol !== ".")
        && (count < 10)
        && (integer[0] !== '.')
        // if get ClickedSymbol is not +
        && (getClickedOperator !== '+') ) {
        placeNumber()
    }else if( (getClickedSymbol === '.')
        && (count < 5) ) {
        placeNumber()
    } else if( (integer.length <= 2) && (operator.length >= 1) )  {
        getNumbersPlace.innerHTML = getClickedSymbol;
    }

}

function operatorController(){
    const total = firstNumberOperand.first + parseInt(integer[1]);
    if((integer[0]) && (integer[1] && (firstNumberOperand.first === 0)) ) {
       add();
   }else if( (integer[0]) && (integer[1] ) && (operator[0]) ){
       console.log(total);
       firstNumberOperand.first = total;
       getNumbersPlace.innerHTML = total;
   }else{
       return null;
   }

}

function add(){
    const leftOperand = integer[0];
    const rightOperand = integer[1];
    results = parseInt(leftOperand) + parseInt(rightOperand);
    firstNumberOperand.first = results;//12
    getNumbersPlace.innerHTML = results;
    console.log('=====Results from Add', results)
}

function placeNumber() {
    const displayNumber = document.createElement('span');
    displayNumber.innerHTML =  getClickedSymbol;
    getNumbersPlace.append(displayNumber);
}




