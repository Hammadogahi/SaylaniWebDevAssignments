// Chapter 6

// Question 1

function Question1g() {
    var a = parseInt(prompt("Please enter the value of a"))

    var a_preincre = ++a
    var a_postincre = a++
    var value_a_incr = a
    var a_predre = --a
    var a_postdre = a--
    var value_a_decre = a

    document.write("Result: <br>" + "The value of a is: " + a + "<br>......................................... <br>" + "<br>The value of ++a is: " + a_preincre + "<br>Now the value of a is: " + a_preincre + "<br><br>The value of a++ is: " + a_postincre + "<br>Now the value of a is: " + value_a_incr + "<br><br>The value of --a is: " + a_predre + "<br>Now the value of a is: " + a_predre + "<br><br>The value of a-- is: " + a_postdre + "<br>Now the value of a is: " + value_a_decre)

}

// Question 3

function Question3g() {
    var userinputname = prompt("What is your name?")

    alert("Hello Mr/Miss " + userinputname + "\nWelcome to JS")

}

// Question 5

// function Question5g() {
//     var inputnumber = parseInt(prompt("Please input a number"))
//     var five = 5

//     if (inputnumber = null) {
//         five = five * 1
//         five = five * 2
//         five = five * 3
//         five = five * 4
//         five = five * 5
//         five = five * 6
//         five = five * 7
//         five = five * 8
//         five = five * 9
//         five = five * 10
//     } else {
//         newnumber1 = inputnumber * 1
//         newnumber2 = inputnumber * 2
//         newnumber3 = inputnumber * 3
//         newnumber4 = inputnumber * 4
//         newnumber5 = inputnumber * 5
//         newnumber6 = inputnumber * 6
//         newnumber7 = inputnumber * 7
//         newnumber8 = inputnumber * 8
//         newnumber9 = inputnumber * 9
//         newnumber10 = inputnumber * 10
//     }

//     document.write (document.write("Table of " + inputnumber + "<br>" + inputnumber + "x" + "1=" + newnumber1 + "<br>" + inputnumber + "x" + "2=" + newnumber2 + "<br>" + inputnumber + "x" + "3=" + newnumber3 + "<br>" + inputnumber + "x" + "4=" + newnumber4 + "<br>" + inputnumber + "x" + "5=" + newnumber5 + "<br>" + inputnumber + "x" + "6=" + newnumber6 + "<br>" + inputnumber + "x" + "7=" + newnumber7 + "<br>" + inputnumber + "x" + "8=" + newnumber8 + "<br>" + inputnumber + "x" + "9=" + newnumber9 + "<br>" + inputnumber + "x" + "10=" + newnumber10))
// }

// Question 5, having problem

// Question 6

function Question6g() {
    var student_1 = prompt("Please enter your subject")
    var subject_1 = parseInt(prompt("Please enter the obtained marks of the previous subject"))
    var student_2 = prompt("Please enter your subject")
    var subject_2 = parseInt(prompt("Please enter the obtained marks of the previous subject"))
    var student_3 = prompt("Please enter your subject")
    var subject_3 = parseInt(prompt("Please enter the obtained marks of the previous subject"))

    var totalmarks_1 = 100

    percentage_1 = (subject_1 / totalmarks_1) * 100
    percentage_2 = (subject_2 / totalmarks_1) * 100
    percentage_3 = (subject_3 / totalmarks_1) * 100

    var totalofmarks = 300
    var totalobtained = subject_1 + subject_2 + subject_3
    var totalpercent = ((percentage_1 + percentage_2 + percentage_3)/300) * 100

    document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr> <tr><td>" + student_1 + "</td><td>" + totalmarks_1 + "</td><td>" + subject_1 + "</td><td>" + percentage_1 + "%</td></tr> <tr><td>" + student_2 + "</td><td>" + totalmarks_1 + "</td><td>" + subject_2 + "</td><td>" + percentage_2 + "%</td><tr><td>" + student_3 + "</td><td>" + totalmarks_1 + "</td><td>" + subject_3 + "</td><td>" + percentage_3 + "%</td></tr> <tr><td></td><td>" + totalofmarks + "</td><td>" + totalobtained + "</td><td>" + totalpercent + "%</td></tr></table>")
}
