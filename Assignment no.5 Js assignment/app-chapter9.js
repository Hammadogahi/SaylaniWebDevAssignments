// Chapter 14 - 16

// Question 1

var student_info = []

// Question 2

var new_array = new Array()


// Question 3
var string_array = ["apple", "banana", "cat", "dog"]


// Question 4
var numbers_array = [1, 2, 3, 4]

// Question 5
var boolean_array = [true, false]

// Question 6
var mixed_array = [1, "hello world", true]

// Question 7

function Question7j() {
    var qual_array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD."]
    document.write("<h1>Qualifications</h1>")
    for (var i = 0; i < qual_array.length; i++) {
        var cri = qual_array[i];
        var output = i + 1 + ") " + cri + "<br>";
        document.write(output)
    }
}

// Question 8

function Question8j() {
    var student_1 = prompt("Please enter student 1 name")
    var student_2 = prompt("Please enter student 2 name")
    var student_3 = prompt("Please enter student 3 name")

    var student_1_score = parseInt(prompt("Please enter student 1 total score"))
    var student_2_score = parseInt(prompt("Please enter student 2 total score"))
    var student_3_score = parseInt(prompt("Please enter student 3 total score"))

    var total_score = 500

    var percentage_student1 = (student_1_score / total_score) * 100
    var percentage_student2 = (student_2_score / total_score) * 100
    var percentage_student3 = (student_3_score / total_score) * 100

    var student_array = [student_1, student_2, student_3]
    var student_score_array = [student_1_score, student_2_score, student_3_score]
    var student_percentage = [percentage_student1, percentage_student2, percentage_student3]

    for (var i = 0; i < student_array.length; i++) {
        document.write("Score of " + student_array[i] + " " + "is " + student_score_array[i] + ". Percentage: " + student_percentage[i] + "%<br>")
    }
}

// Question 9
function Question9j() {
    var color_names = ["red", "green", "blue"]
    alert(color_names)
    var color_ask_1 = prompt("What color do you want to add in the beginning?")
    color_names.unshift(color_ask_1)
    alert(color_names)
    var color_ask_2 = prompt("What color do you want to add at the end?")
    color_names.push(color_ask_2)
    alert(color_names)
    color_names.unshift("violet", "pink")
    alert("After adding 2 more colors in start" + "\n" + color_names)
    color_names.shift()
    alert("After deleting the first color" + "\n" + color_names)
    color_names.pop()
    alert("After deleting the last color" + "\n" + color_names)

    var color_position = parseInt(prompt(color_names + "\nWhich index you want to add a color?"))
    var color_choice = prompt("What is the color name that you want to assign in that position?")

    color_names.splice(color_position, 0, color_choice)
    alert(color_names)
    // problem
    var color_position_delete = parseInt(prompt(color_names + "\nWhich index you want to delete a color?"))
    var numofcolordelete = parseInt(prompt("How many colors you want to delete from that position?"))

    color_names.shift(color_position_delete, numofcolordelete)
    alert(color_names)

}

// Question 10

function Question10j() {
    var student_score_sort = [320, 230, 480, 120]
    document.write("Scores of Students :" + student_score_sort)
    student_score_sort.sort()
    document.write("<br>Ordered Scores of Students :" + student_score_sort)

}

// Question 11

function Question11j() {
    var cities_name = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
    document.write("Cities list:<br>" + cities_name + "<br><br>")
    cities_name.splice(0, 2)
    cities_name.pop()
    document.write("Selected cities list:<br>" + cities_name)
}

// Question 12

function Question12j() {
    var thisismycat_array = ["This", "is", "my", "cat"]
    var thisismycat = "This is my cat"

    document.write("<h1>Array</h1><br>" + thisismycat_array + "<br><br>" + "<h1>String</h1><br>" + thisismycat)

}

// Question 13

function Question13j() {
    var devices = ["keyboard", "mouse", "printer", "monitor"]
    document.write("Devices:<br>" + devices + "<br><br>")
    for (var i = 0; i < devices.length; i++) {
        document.write("Out:<br>" + devices[i] + "<br>")
    }
}

// Question 14

function Question14j() {
    var devices = ["keyboard", "mouse", "printer", "monitor"]
    document.write("Devices:<br>" + devices + "<br><br>")
    devices.reverse()
    for (var i = 0; i < devices.length; i++) {
        document.write("Out:<br>" + devices[i] + "<br>")
    }
}