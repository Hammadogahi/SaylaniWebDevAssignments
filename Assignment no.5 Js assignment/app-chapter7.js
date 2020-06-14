// Chapter 7

// Question 1

function Question1h() {
    var cityname = prompt("Please input the city name")

    if (cityname == "karachi") {
        alert("Welcome to city of lights")
    }
}

// Question 2

function Question2h() {
    var gender = prompt("Please enter your gender")

    if (gender == "male") {
        alert("Good Morning Sir")
    } else if (gender == "female") {
        alert("Good Morning Ma'am")
    }
}

// Question 3

function Question3h() {
    var signal_color = prompt("What is the color of road traffic signal?")

    if (signal_color == "red") {
        alert("Must Stop")
    } else if (signal_color == "yellow") {
        alert("Ready to move")
    } else if (signal_color == "green") {
        alert("Move on")
    }
}

// Question 4

function Question4h() {
    var fuel_input = parseFloat(prompt("What is the remaining fuel in your car (in liters)?"))
    var min_fuel = 0.25

    if (fuel_input < min_fuel) {
        alert("Please refill the fuel in your car")
    }
}

// Question 5

// First part 

function Question5ha() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }

    // Alert showed, "given condition for variable a is true"
}

// Second part 

function Question5hb() {
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }

    // No alert shown because it is a postincrement question
}

// Third part 

function Question5hc() {
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }

    // Alert shown, condition 2 is true & condition 4 is true

}

// Fourth part 

function Question5hd() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }

    // Alert shown, "The cost equals" because there is no variable in the alert 
}

// Fifth part 

function Question5he() {
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }

    // Alert shown true
}

// Sixth part 

function Question5hf() {
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }

    // Alert shown car is smaller than cat
}

// Question 6

function Question6h() {
    var marksinput_2 = parseInt(prompt("Please enter obtained marks"))

    var totalmarks_3 = 300

    percentage_marks = (marksinput_2 / totalmarks_3) * 100

    if (percentage_marks >= 80) {
        document.write("<h1>Mark Sheet</h1><br>" + "<br>Total marks : " + totalmarks_3 + "<br>Marks obtained : " + marksinput_2 + "<br>Percentage : " + percentage_marks + "%" + "<br>Grade : A-one" + "<br>Remarks : Excellent")
    } else if (percentage_marks >= 70 && percentage_marks < 80) {
        document.write("<h1>Mark Sheet</h1><br>" + "<br>Total marks : " + totalmarks_3 + "<br>Marks obtained : " + marksinput_2 + "<br>Percentage : " + percentage_marks + "%" + "<br>Grade : A" + "<br>Remarks : Good")
    } else if (percentage_marks >= 60 && percentage_marks < 70) {
        document.write("<h1>Mark Sheet</h1><br>" + "<br>Total marks : " + totalmarks_3 + "<br>Marks obtained : " + marksinput_2 + "<br>Percentage : " + percentage_marks + "%" + "<br>Grade : B" + "<br>Remarks : You need to improve")
    } else {
        document.write("<h1>Mark Sheet</h1><br>" + "<br>Total marks : " + totalmarks_3 + "<br>Marks obtained : " + marksinput_2 + "<br>Percentage : " + percentage_marks + "%" + "<br>Grade : Fail" + "<br>Remarks : Sorry")
    }
}

// Question 7

function Question7h() {
    var secret_number = 7

    var secret_input_number = parseInt(prompt("Guess the number"))

    if (secret_input_number === secret_number) {
        alert("Bingo! Correct answer")
    } else if (secret_input_number === 6) {
        alert("Close enough to the correct answer")
    }
}

// Question 8

function Question8h() {
    var number_input_3 = parseInt(prompt("Please input a number"))
    var divisible_by_3 = number_input_3 % 3 === 0

    if (divisible_by_3) alert("The number is divisible by 3")

}

// Question 9

function Question9h() {
    var even_odd_input = parseInt(prompt("Please input a number"))

    if (even_odd_input%2===0){
        alert ("Your input number is even")
    } else if (even_odd_input%3 === 0) {
        alert ("Your input number is odd")
    }
}


// Question 10

function Question10h() {
    var input_temp = parseInt (prompt ("Please enter the temperature"))

    if (input_temp > 40) {
        alert ("It is too hot outside.")
    }else if (input_temp >30 && input_temp <= 40) {
        alert ("The Weather today is Normal.")
    }else if (input_temp >20 && input_temp<=30){
        alert ("Today's Weather is cool.")
    }else if (input_temp >10 && input_temp<=20) {
        alert ("OMG! Today's weather is so Cool.")
    }
}

// Question 11

function Question11h () {
    var num1 = parseInt (prompt("Please enter the first number"))
    var sign = prompt ("Please enter the sign")
    var num2 = parseInt (prompt ("Please enter the second number"))

    if (sign === "+") {
        result = num1 + num2
        alert (num1 + sign + num2 + "=" + result)
    } else if (sign === "-") {
        result = num1 - num2
        alert (num2 + sign + num1 + "=" + result)
    } else if (sign === "*") {
        result = num1 * num2
        alert (num1 + sign + num2 + "=" + result)
    } else if (sign === "/"){
        result = num1/num2
        alert (num1 + sign + num2 + "=" + result)
    } else if (sign==="%"){
        result = num1%num2
        alert (num1 + sign + num2 + "=" + result)
    }
}