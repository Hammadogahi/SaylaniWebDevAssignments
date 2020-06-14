// Chapter 3

// Question 1

function Question1d() {
    var age = prompt("Please enter your age")
    alert("I am " + age + "years old")
}


// Question 2

// for (var i = 0; i >= 0; i++) {
//     alert("You have visited this site " + i + " times.")
// }

// Question 3

function Question3d() {
    var birthYear = prompt("Please enter your birth year")
    document.write("My birth year is " + birthYear + "<br>" + "Date type of my declared variable is number")
}

// Question 4

function Question4d () {
    var name
    var productitle
    var quantity

    var name = "<b>John Doe</b> "
    var productitle = "<b>T-shirt</b>(s) "
    var quantity = "<b>5</b> "

    document.write (name + "ordered " + quantity + productitle + "on XYZ Clothing store." )
}