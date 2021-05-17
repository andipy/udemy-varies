// var pst = document.getElementById("first");
// var pnd = document.getElementsByClassName("special");
// var prd = document.getElementsByTagName("p");
// var pth = document.getElementsByName("Hi Again");



//EXERCISE ONE
var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click" , function() {
    body.classList.toggle("purple");
});

function bodyBackground() {
    if ( body.style.background == "" ) {
        body.style.background = "purple";
    } else if ( body.style.background == "purple" ) {
        body.style.background = "";
    }  
    
}

button.addEventListener("click" , bodyBackground);