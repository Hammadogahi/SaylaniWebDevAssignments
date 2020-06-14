// Chapter 5

// Question 1

function Question1f() {

    var num1 = parseInt(prompt("Please enter the first value"))
    var num2 = parseInt(prompt("Please enter the second value"))
    result = num1 + num2;
    document.write("The sum of " + num1 + "and " + num2 + "is " + result)
}

// Question 2

function Question2fa() {

    var num1 = parseInt(prompt("Please enter the first value"))
    var num2 = parseInt(prompt("Please enter the second value"))
    result = num2 - num1;
    document.write("The difference of " + num1 + "from " + num2 + "is " + result)
}

function Question2fb() {

    var num1 = parseInt(prompt("Please enter the first value"))
    var num2 = parseInt(prompt("Please enter the second value"))
    result = num1 / num2;
    document.write("The divison of " + num1 + "and " + num2 + "is " + result)
}

function Question2fc() {

    var num1 = parseInt(prompt("Please enter the first value"))
    var num2 = parseInt(prompt("Please enter the second value"))
    result = num1 % num2;
    document.write("The remainder of " + num1 + "and " + num2 + "is " + result)
}

// Question 3

function Question3f() {
    var number
    var nmb = 5
    var nmbincrement = nmb + 1
    var newnmb = nmbincrement + 7
    var nmbdecrement = newnmb - 1
    var nmbrem = nmbincrement % 3

    document.write("Value after variable declaration is " + number + "<br>Initial value: " + nmb + "<br>Value after increment is: " + nmbincrement + "<br>Value after addition is: " + newnmb + "<br>Value after decrement is: " + nmbdecrement + "<br>The remainder is: " + nmbrem)
}

// Question 4

function Question4f() {
    var ticket = 600
    var numticket = parseInt(prompt("Please enter the number of tickets that you want"))
    var totalcost = ticket * numticket

    document.write("Total cost to buy " + numticket + "tickets to a movie is " + totalcost + "PKR")
}

// Question 5

function Question5f() {
    var table = parseInt(prompt("Which table you want to see"))
    newnumb1 = table * 1
    newnumb2 = table * 2
    newnumb3 = table * 3
    newnumb4 = table * 4
    newnumb5 = table * 5
    newnumb6 = table * 6
    newnumb7 = table * 7
    newnumb8 = table * 8
    newnumb9 = table * 9
    newnumb10 = table * 10

    document.write("Table of " + table + "<br>" + table + "x" + "1=" + newnumb1 + "<br>" + table + "x" + "2=" + newnumb2 + "<br>" + table + "x" + "3=" + newnumb3 + "<br>" + table + "x" + "4=" + newnumb4 + "<br>" + table + "x" + "5=" + newnumb5 + "<br>" + table + "x" + "6=" + newnumb6 + "<br>" + table + "x" + "7=" + newnumb7 + "<br>" + table + "x" + "8=" + newnumb8 + "<br>" + table + "x" + "9=" + newnumb9 + "<br>" + table + "x" + "10=" + newnumb10)
}

// Question 6

function Question6f () {
    var cels = parseInt (prompt("Provide a value of temperature in celsius")) 
    var fahrenheit = parseInt (prompt("Provide a value of temperature in fahrenheit")) 
    var fahr = (cels * (9/5)) + 32
    var celsius = (fahrenheit - 32) * (5/9)

    document.write (cels + "°C is " + fahr + "°F" + "<br>" + fahrenheit + "°F is " + celsius + "°C") 


}

// Question 7

function Question7f () {
    var item1 = 650
    var item1quantitiy = parseInt ( prompt ("How many item 1 do you desire?"))

    var item2 = 100
    var item2quantitiy = parseInt ( prompt ("How many item 2 do you desire?"))

    var shipping = 100

    var total = (item1 * item1quantitiy) + (item2 * item2quantitiy) + shipping

    document.write ("Price of item 1 is " + item1 + "<br>Quantity of item 1 is " + item1quantitiy + "<br>Price of item 2 is" + item2 + "<br>Quantity of item 2 is " + item2quantitiy + "<br>Shipping Changes " + shipping + "<br>" + "<br>Total cost of your order is " + total )

}

// Question 8

function Question8f () {
    var totalmarks = 980
    var obtainedmarks = parseInt ( prompt ("Please enter your marks"))

    var markpercentage = (obtainedmarks/totalmarks) * 100

    document.write ("<h1>Marks Sheet</h1><br><br>" + "<br>" + "Total marks: " + totalmarks + "<br>Marks obtained: " + obtainedmarks + "<br>Percentage: " + markpercentage + "%")
}

// Question 9

function Question9f () {
    var dollars = 10
    var saudi_riyals = 25

    var dollartorupee = dollars * 104.80
    var riyaltorupee = saudi_riyals * 28

    var totalrupee = dollartorupee + riyaltorupee

    document.write ("<h1>Currency in PKR</h1><br><br>" + "Total Currency in PKR: " + totalrupee)
}

// Question 10

function Question10f () {
    var variable = parseInt ( prompt("Please enter a number"))

    var add = variable + 5
    var multiply = add * 10
    var divide = multiply/2

    alert ("Your answer is" + "\n" + divide)
}

// Question 11

function Question11f () {
    var currentyear = parseInt ( prompt ("Please enter current year"))
    var birthyear = parseInt ( prompt ("Please enter birth year"))

    var age = currentyear - birthyear

    document.write ("<h1>Age Calculator</h1><br>" + "Current Year: " + currentyear + "<br>Birth Year: " + birthyear + "<br>Your Age is: " + age)
    
}

// Question 12

function Question12f () {
    var radius = parseInt ( prompt("Please enter the value of radius"))
    var circum = 2 * (22/7) * radius
    var area = (22/7) * (radius * radius)

    document.write ("<h1>The Geometrizer</h1><br>" + "Radius of a circle: " + radius + "<br>The circumference is: " + circum + "<br>The area is: " + area)
}

// Question 13

function Question13f () {
    var favsnack = ( prompt ("Please enter your favourite snack"))
    var currentage = parseInt ( prompt ("Please enter the current age"))
    var maxage = parseInt ( prompt ("Please enter the maximum age"))
    var amountpd = parseInt ( prompt ("Please enter an estimated amount of treat per day"))

    var calculate = (maxage - currentage) * amountpd

    document.write ("<h1>The Lifetime Supply Calculator</h1><br>" + "<br>Favourite Snack: " + favsnack + "<br>Current age: " + currentage + "<br>Estimated Maximum Age: " + maxage + "<br>Amount of snacks per day: " + amountpd + "<br>You will need" + calculate + favsnack + "to last you until the ripe old age of " + maxage)
}

