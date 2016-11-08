/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.
function minimum(num1, num2) {
    if (num1 > num2) {
        return num1 + "is larger than" + num2;
    } else if (num2 > num1) {
        return num2 + " is greater than " + num1;
    } else {
        return " I guess your numbers are equal... "
    }
};
document.getElementById("callNums").addEventListener("click", function() {
    document.getElementById("q1").innerHTML = minimum(document.getElementById("numOne").value, document.getElementById("numTwo").value);
});





// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.
function minimum3(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1 + " is the largest number";
    } else if (num2 >= num1 && num2 >= num3) {
        return num2 + " is the largest number.";
    } else if (num3 >= num1 && num3 >= num2) {
        return num3 = " is the largest number.";
    } else {
        return "Ouch, my brain. It hurts."
    }
};
document.getElementById("callNum").addEventListener("click", function() {
    document.getElementById("q2").innerHTML = minimum3(document.getElementById("number1").value, document.getElementById("number2").value, document.getElementById("number3").value);

});



// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(numberArray) {
    var total = 0;
    for (i = 0; i < numberArray.length; i++) {
        total += numberArray[i]
    }
    return total + " is the total."
};
document.getElementById("q3").innerHTML = sum([1, 2, 3, 4]);




// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(numsArray) {
    var total = 1;
    for (i = 0; i < numsArray.length; i++) {
        total *= numsArray[i]
    }
    return total + " is the total."
};
document.getElementById("q4").innerHTML = multiply([2, 4, 6, 8]);




// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
// var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];
var words = ["window", " table", " cup", " knife", " barstool", " glass", " charger", " outlet"];

function filterSixPlus(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].length < 6) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

document.getElementById("q5").innerHTML = filterSixPlus(words);





// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.


function temp(str) {
    str *= 1.8;
    str += 32;
    var fahrenheit = str.toFixed(1);
    return fahrenheit
}
document.getElementById("callTemp").addEventListener("click", function() {
    document.getElementById("q6").innerHTML = temp(document.getElementById("cToF").value);
});









// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.
document.getElementById("cOrF").addEventListener("click", function() {
    var answer = prompt("Would you like to convert from Celsius to Fahrenheit(use C to F), or from Fahrenheit to Celsius (use F to C)?")
    temperatureCorF(answer);

    function temperatureCorF(answer) {
        if (answer === "C to F") {
            var CtoF = prompt("Please enter a temperature");
            CtoF = parseFloat(CtoF);
            CtoF *= 1.8;
            CtoF += 32;
            var CtoFValue = CtoF.toFixed(1);
            var tempAnswer = document.getElementById("q7").innerHTML = "The temperature in Fahrenheit is " + CtoFValue + " degrees.";
        } else if (answer === "F to C") {
            var FtoC = prompt("Please enter the temperature");
            FtoC = parseFloat(FtoC);
            FtoC -= 32;
            FtoC /= 1.8;
            var FtoCValue = FtoC.toFixed(0);
            var tempAnswer = document.getElementById("q7").innerHTML = "The temperature in Celsius is " + FtoCValue + " degrees.";
        } else {
            var tempAnswer = document.getElementById("q7").innerHTML = "Invalid input"
        }
    }
});







// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
 function countBs(string) {
     var countB = 0;
     for (i = 0; i < string.length; i++) {
         if (string.charAt(i) === "B"){
        countB += 1;
        }
    }
     return countB;
 };



console.log(countBs("BBBBBBabbling babies are usually named Bonnie"));
console.log(countBs("Bob Saget is a big weirdo."));
document.getElementById("countTheB").addEventListener("click", function(){
  document.getElementById("q8").innerHTML = countBs(document.getElementById("enterSentence").value);
});




// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.






// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.






// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.






// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.
