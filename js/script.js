// Lesson Task 2.4

// 1. Declare and call a function that logs the string "What the func is this nonsense?"

function logString() {
    console.log("What the func is this nonsense?");
}

logString();


// 2. Create and call a function with two arguments, firstName and lastName. The function should log both the argument values with a space between them.

function logName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}

logName("Eli", "Nygard");


//3.

function multiply(firstNumber, secondNumber) {
    var typeofFirst = typeof firstNumber;
    var typeofSecond = typeof secondNumber;

    if (typeofFirst !== "number" || typeofSecond !== "number") {
        return "Please supply number values.";
    }

    return firstNumber * secondNumber;
}

var result = multiply(2, 5);
console.log(result);

//4.

function addition(num1, num2, num3) {
    var convertedNum1 = parseFloat(num1);
    var convertedNum2 = parseFloat(num2);
    var convertedNum3 = parseFloat(num3);

    if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {
        return "Invalid argument types.";
    }

    return convertedNum1 + convertedNum2 + convertedNum3;
}

var paragraph = document.querySelector("p");

var sum = addition(6, "1.5", "2");

console.log(sum);

paragraph.innerHTML = sum;


//5. 

var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
    var heading = document.querySelector("h1");
    heading.innerHTML += ": Updated";   //legger til uten å erstatte tekst som er der fra før
}


//6. 

var buttonTitle = document.querySelector(".title");

console.dir(document);

buttonTitle.onclick = function() {
    var pageTitle = document.querySelector("title");
    pageTitle.innerHTML = "I've been updated";
}


//7.

var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");
var pageBackground = document.querySelector("body");

redButton.onclick = function() {
    pageBackground.style.backgroundColor = "red";
}

orangeButton.onclick = function() {
    pageBackground.style.backgroundColor = "orange";
}

pinkButton.onclick = function() {
    pageBackground.style.backgroundColor = "pink";
}

// or

var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");

// this function will be called by the other functions
function changeBackground(colour) {
    document.body.style.backgroundColor = colour;
}

redButton.onclick = function () {
    changeBackground("red");
};

orangeButton.onclick = function () {
    changeBackground("orange");
};

pinkButton.onclick = function () {
    changeBackground("pink");
};
