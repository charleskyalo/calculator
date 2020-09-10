/* what is previously on the screen */
let runningTotal = 0;
/* what is on the screen  */
let buffer = "0";
/*Keep track of the previous operator  */
let previousOperator;
const screen = document.querySelector('.screen');
/* what happens wen a function is clicked ? */
function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    if (symbol === 'c') {
        buffer = "0";
        runningTotal = 0;
    }
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}


/* intial state  of  the calc */
function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        });
}

init();