//clear the entry of the display
const getClearEntryButton = document.getElementById('clear-entry');
const getNumbersPlace = document.getElementById('numbers-place');
getClearEntryButton.addEventListener('click',()=>{
    getNumbersPlace.innerHTML = '';
    count = 0;
    integer = [];
});
document.querySelector("#buttons-numbers").
addEventListener('click', selectNumbers );

// display each number in the numbers place
// each number that is clicked its value will be rendered in the numbers place
let integer =[];
let getClickedSymbol;

function selectNumbers (e) {
    getClickedSymbol = e.target.value;
    console.log(`Symbol that was click ${getClickedSymbol}`);
    operationSwitcher()
}
let count = 0;
function operationSwitcher (){
    count = ++count;
    if((integer[0] ==='.') && (count < 4)){
        placeNumber()
    }else if(
        (getClickedSymbol !== ".")
        && (count < 10)
        && (integer[0] !== '.') ) {
        placeNumber()
    }else if( (getClickedSymbol === '.')
        && (count < 2) ) {
        placeNumber()
    }
}

function placeNumber() {
    const displayNumber = document.createElement('span');
    displayNumber.innerHTML =  getClickedSymbol;
    getNumbersPlace.append(displayNumber);
    integer.push(getClickedSymbol);
}

