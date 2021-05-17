function pickColor(array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
};

function changeColors(color) {
    //loop through all squares
    for ( var i = 0 ; i < square.length ; i++ ) {
        //change each color to match given color
        square[i].style.backgroundColor = color;
    }
    header.style.backgroundColor = color;
};

function randomNumber() {
    return Math.floor(Math.random() * 256);
};
function generateRGB() {
    return "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
};

function generateRandomColors(num) {
    var colors = [];
    for ( var i = 0 ; i < num ; i++ ) {
        colors.push(generateRGB());
    }
    return colors;
}

var colors = generateRandomColors(6);
var square = document.getElementsByClassName("square");
var changingRGB = document.getElementById("changingRGB");
var messageDisplay = document.getElementById("message");
var pickedColor = pickColor(colors);
var header = document.getElementById("header");
var resetButton = document.querySelector("#play-again");
var easy = document.querySelector("#easy-btn");
var hard = document.querySelector("#hard-btn");
var numSquares;

easy.addEventListener("click" , function() {
    easy.classList.add("active");
    hard.classList.remove("active");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    changingRGB.textContent = pickedColor;
    for ( var i = 0 ; i < square.length ; i++ ) {
        if ( colors[i] ) {
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }
    header.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
});

hard.addEventListener("click" , function() {
    easy.classList.remove("active");
    hard.classList.add("active");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    changingRGB.textContent = pickedColor;
    for ( var i = 0 ; i < square.length ; i++ ) {
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
    header.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
});

resetButton.addEventListener("click" , function() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    changingRGB.textContent = pickedColor;
    for ( var i = 0 ; i < square.length ; i++ ) {
        //add initial color to square
        square[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
})

changingRGB.textContent = pickedColor;

for ( var i = 0 ; i < square.length ; i++ ) {
    //add initial color to square
    square[i].style.backgroundColor = colors[i];

    //add click listeners to square
    square[i].addEventListener("click" , function() {
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if ( clickedColor === pickedColor ) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again!"
        }
    });
};