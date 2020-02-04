//clear the entry of the display
const getClearEntryButton = document.getElementById('clear-entry');
const getNumbersPlace = document.getElementById('numbers-place');
getClearEntryButton.addEventListener('click',()=>{
    getNumbersPlace.innerHTML = '';
});
document.querySelector("#buttons-numbers").
addEventListener('click', selectNumbers );

// display each number in the numbers place
// each number that is clicked its value will be rendered in the numbers place
let stored;
function selectNumbers (e) {
    stored = e.target.value;
    placeNumber()
}

const interger =[];
let count = 0;
function placeNumber() {
    const displayNumber = document.createElement('span');
    displayNumber.innerHTML = stored;
    count = ++count;
    console.log(count);
    if(count < 10) {
        interger.push(stored);
        getNumbersPlace.append(displayNumber);
    }else{
        return null
    }
}

