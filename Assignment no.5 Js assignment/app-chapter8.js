// Chapter 12 - 13

// Question 1
function Question1i() {

}

// Question 2
function Question2i() {
    var int_1 = parseInt(prompt("Please input the first integer"))
    var int_2 = parseInt(prompt("Please input the second integer"))

    if (int_1 > int_2) {
        alert("The larger integer is " + int_1)
    } else if (int_2 > int_1) {
        alert("The larger integer is " + int_2)
    } else if (int_1 === int_2) {
        alert("Both integer are equal to each other")
    }
}

// Question 3

function Question3i() {
    var num_input_2 = parseInt(prompt("Please enter a number"))

    if (num_input_2 > 0) {
        alert("The input number is positive")
    } else if (num_input_2 < 0) {
        alert("The input number is negative")
    } else {
        alert("The input number is zero")
    }
}

// Question 4

function Question4i() {
    var character_input = prompt("Please enter a variable")
    var vowels = ["a", "e", "i", "o", "u"]
    if (character_input = vowels) {
        alert("The character that you inputed is a vowel")
    } else {
        alert("The input character is not a vowel")
    }
}

// problem

// Question 5

function Question5i() {
    var password_store = prompt("Please store a password")
    var password_ask = prompt("What is your password?")

    if (password_store === password_ask) {
        alert("Correct! The password you entered matches the original password")
    } else {
        alert("Incorrect password")
    }
}

// Question 6

function Question6i() {
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    }
    else {
        greeting = "Good evening";
    }
       
}


// Question 7

function Question7i () {
    var time = parseInt (prompt ("Please enter the time (in 24 hours)")) 
    if (time >= 0000 && time <1200) {
        alert ("Good morning!")
    } else if (time >= 1200 && time < 1700) {
        alert ("Good afternoon!")
    } else if (time >= 1700 && time < 2100) {
        alert ("Good evening")
    } else if (time >= 2100 && time <=2359)  {
        alert ("Good night")
    } else {
        alert ("The input is wrong")
    }
}