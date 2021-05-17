//EXERCISE ONE
// var firstName = prompt("What's you first name?");
// var lastName = prompt("What's your last name?");
// var age = prompt("How old are you?");

// alert("Hello " + firstName + " " + lastName + "!");
// alert("You are young! You are just " + age + " years old!");

// console.log("Hello " + firstName + " " + lastName + "!");
// console.log("You are young! You are just " + age + " years old!");




//EXERCISE TWO
// var age;
// age = prompt("How old are you?");

// var days;
// days = age * 365;

// alert("You have been alive for " + days + " days!");




//EXERCISE THREE
// var age = prompt("How old are you?");

// if ( age < 0 ) {
//     alert("The age is wrong");
// } else if ( age < 18 ) {
//     alert("Sorry, you are too young, you cannot enter");
// } else if ( age >= 18 && age <= 21 ) {
//     alert("You can come in, but you cannot drink");
// } else {
//     alert("You can come in and drink as well");
// }



//EXERCISE FOUR
// var age = Number(prompt("How old are you?"));

// if ( age < 0 ) {
//     document.write("You are lying, the age cannot be negative");
// } else if ( age == 21 ) {
//     document.write("Happy 21st birthday");
// } else if ( age % 2 == 1 ) {
//     document.write("Your age is odd!");
// }

// if ( Number.isInteger(Math.sqrt(age)) ) {
//     document.write("Perfect square!");
// }




//EXERCISE FIVE print all numbers between -10 and 19
// var count = -10;

// while ( count <= 19 ) {
//     document.write(count);
//     document.write(" ");
//     count = count + 1;
// }



//EXERCISE SIX print all even numbers between 10 and 40
// var evenNumber = 10;

// while ( evenNumber <= 40 ) {
//     if ( evenNumber % 2 != 1 ) {
//         document.write(evenNumber);
//         document.write("   ");
//     }
//     evenNumber++;
// }



//EXERCISE SEVEN
// var oddNumber = 300;

// while ( oddNumber <= 333 ) {
//     if ( oddNumber % 2 != 0 ) {
//         document.write(oddNumber);
//         document.write("   ");
//     }
//     oddNumber++;
// }



//EXERCISE EIGHT
// var num = 5;

// while ( num <= 50 ) {
//     if ( num % 3 == 0 && num % 5 == 0 ) {
//         document.write(num);
//         document.write("   ");
//     }
//     num++;
// }



//EXERCISE NINE
// var quest = prompt("Are we there yet");

// while ( quest !== "yes" && quest !== "yeah" ) {
//     var quest = prompt("Are we there yet");
// }
// alert("Yes! We finally made it!");



//EXERCISE TEN
// var answer = prompt("Are we there yet?");

// while ( answer.indexOf("yes") === -1 ) {
//     var answer = prompt("Are we there yet?");
// }




//EXERCISE ELEVEN print all numbers between -10 and 19
//  for ( var num = -10 ; num <= 19 ; num++ ) {
//      document.write(num);
//      document.write ("   ");
//  }



//EXERCISE TWELVE print all even numbers between 10 and 40
// for ( var evenNum = 10 ; evenNum <= 40 ; evenNum++ ) {
//     if ( evenNum % 2 === 0 ) {
//         document.write(evenNum);
//         document.write("   ");
//     }
// }



//EXERCISE THIRTEEN print all odd numbers between 300 and 333
// for ( var oddNum = 300 ; oddNum <= 333 ; oddNum++ ) {
//     if ( oddNum % 2 !== 0 ) {
//         document.write(oddNum);
//         document.write("   ");
//     }
// }



//EXERCISE FOURTEEN print all numbers between 5 and 50 divisible for 5 AND 3
// for ( var divisible = 5 ; divisible <= 50 ; divisible++ ) {
//     if ( divisible % 3 == 0 && divisible % 5 == 0 ) {
//         document.write(divisible);
//         document.write("   ");
//     }
// }


////////////////////////////////////
/////////////FUNCTIONS//////////////
////////////////////////////////////

//EXERCISE ONE even or odd
// function isEven(a) {
//     if ( a % 2 === 0 ) {
//         return ("The number " + a + " is even");
//     } else {
//         return ("The number is odd");
//     }

// }




//EXERCISE TWO factorial
// function factorial(a) {
//     var fac = 1;
//     while ( a > 0 ) {
//         fac = fac * a;
//         a = a - 1;
//     }
//     return fac;
// }




//EXERCISE THREE factorial
// function kebabToSnake(str) {
//     var newString = str.replace( /-/g , "_" );
//     return newString;
// }




// window.setTimeout(function() {

//     var todos = [];
//     var what = prompt("What do you want to do?");

//     while ( what !== "quit" ) {
//         if ( what === "list" ) {
//             listTodo;            
//         } else if ( what === "new" ) {
//             addTodo;                        
//         } else if ( what === "delete" ) {
//             deleteTodo;
//         }
//         what = prompt("What do you want to do?");
//     }

//     function listTodo() {
//         console.log("**********");
//         todos.forEach(function(element , i) {
//             console.log(i + ": " + element);
//         });
//         console.log("**********");
//     }

//     function addTodo() {
//         var newTodo = prompt("Add a todo");
//         todos.push(newTodo);
//         console.log("New todo added to the list");
//     }

//     function deleteTodo() {
//         var toDelete = prompt("What task do you want to delete?");
//         todos.splice(toDelete , 1);
//         console.log("Todo deleted from the list");
//     }

// }, 500);




//EXERCISE FOUR
var array = [1 , 2 , 3 , 4];
var arrayChar = ["a" , "b" , "c" , "d" ];

function printReverse(array) {
    for ( var i = array.length - 1 ; i >= 0 ; i-- ) {
        console.log(array[i]);
    }
}




//EXERCISE FIVE
var vettore = [1 , 1 , 1 , 1];
var prova = ["a" , "a" , "a" , "a" ];
var diff = [1 , 2 , "d"];

function isUniform(array) {
    var temp = array[0];
    i = 0;
    while ( i <= array.length ) {        
        if ( array[i + 1] === temp ) {
            return true;
        } else {
            return false;
        }
        i++;
        temp = array[i + 1];
    }    
}




//EXERCISE SIX
var numberArray = [1 , 17 , 34 , 6];

function sumArray(array) {
    var i = 0;
    var somma = 0;
    while ( i < array.length ) {
        somma = somma + array[i];
        i++;
    }
    console.log(somma);
}




//EXERCISE SEVEN
var numberArray = [1 , 17 , 34 , 6];

function max(array) {
    var i = 1;
    var max = array[0];
    while ( i < array.length ) {
        if ( array[i] > max ) {
            max = array[i];
        }
        i++;
    }
    return max;
}




//EXERCISE EIGHT
var movieDB = [
    {
        title: "Blow",
        rating: 9,
        hasWatched: true
    },
    {
        title: "Fear and Loathing in Las Vegas",
        rating: 8.7,
        hasWatched: true
    },
    {
        title: "American Pie",
        rating: 8,
        hasWatched: true
    },
    {
        title: "Titanic",
        rating: 9,
        hasWatched: false
    }
];

for (var i = 0 ; i < movieDB.length ; i++) {
    if ( movieDB[i].hasWatched == true ) {
        console.log("You have watched " + movieDB[i].title + ", and you scored it " + movieDB[i].rating);
    } else if ( movieDB[i].hasWatched == false ) {
        console.log("You haven't watched " + movieDB[i].title + ", but people score it " + movieDB[i].rating);
    }
};