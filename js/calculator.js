let integer =[];
let getClickedSymbol;

const getClearEntryButton = document.getElementById('clear-entry');
const getNumbersPlace = document.getElementById('numbers-place');

getClearEntryButton.addEventListener('click',()=>{
    getNumbersPlace.innerHTML = '';
    count = 0;
    integer = [];
});
document.querySelector("#buttons-numbers").
addEventListener('click', selectNumbers );

function selectNumbers (e) {
    getClickedSymbol = e.target.value;
    console.log(`Symbol that was click ${getClickedSymbol}`);
    operationSwitcher()
}
let count = 0;
function operationSwitcher (){
    count = ++count;
    if((integer[0] ==='.') && (count < 5)){
        placeNumber()
    }else if(
        (getClickedSymbol !== ".")
        && (count < 10)
        && (integer[0] !== '.') ) {
        placeNumber()
    }else if( (getClickedSymbol === '.')
        && (count < 5) ) {
        placeNumber()
    }
}
function placeNumber() {
    const displayNumber = document.createElement('span');
    displayNumber.innerHTML =  getClickedSymbol;
    getNumbersPlace.append(displayNumber);
    integer.push(getClickedSymbol);
}

