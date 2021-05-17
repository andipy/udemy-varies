var pOne = document.querySelector("#pOne");
var pTwo = document.getElementById("pTwo");

var sOne = 0;
var sOneDisplay = document.getElementById("sOneDisplay");

var sTwo = 0;
var sTwoDisplay = document.getElementById("sTwoDisplay");

var gameOver = false;
var winningScore = 5;

var reset = document.getElementById("reset");

var inputLimit = document.querySelector("input[type='number']");
var sLimitDisplay = document.querySelector("#sLimit");

pOne.addEventListener("click" , function() {
    if ( !gameOver ) {
        sOne++;
        if ( sOne == winningScore ) {
            gameOver = true;
            sOneDisplay.classList.add("winningColor");
        }
        sOneDisplay.textContent = sOne;
    }
});

pTwo.addEventListener("click" , function() {
    if ( !gameOver ) {
        sTwo++;
        if ( sTwo == winningScore ) {
            gameOver = true;
            sTwoDisplay.classList.add("winningColor");
        }
        sTwoDisplay.textContent = sTwo;
    }
});

function resetfunc(){
    sOne = 0;
    sTwo = 0;
    sOneDisplay.textContent = sOne;
    sTwoDisplay.textContent = sTwo;
    sOneDisplay.classList.remove("winningColor");
    sTwoDisplay.classList.remove("winningColor");
    gameOver = false;
}

reset.addEventListener("click" , function() {
    resetfunc();
});

inputLimit.addEventListener("change" , function() {
    winningScore = inputLimit.value;
    sLimitDisplay.textContent = inputLimit.value;
    resetfunc();
});

