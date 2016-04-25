// quiz begins, no answers correct
var correct = 0;
var questions = 0;
var user = [];

var i = 0;

var q1 = "Name a programming language that's also a gem";
var q2 = "Name a programming language that's also a snake";
var q3 = "What language do you use to style web pages?";
var q4 = "What language do you use to build the structure of web pages?";
var q5 = "What language do you use to add interactivity to a web page?";

var a1 = "RUBY";
var a2 = "PYTHON";
var a3 = "CSS";
var a4 = "HTML";
var a5 = "JAVASCRIPT";

var quiz = [
[q1,a1],
[q2,a2],
[q3,a3],
[q4,a4],
[q5,a5]
];

function question(q,a, index){
	user[index] = prompt(q);
	if ( user[index].toUpperCase() == a ) {
 	correct += 1; 
	}
	questions +=1;
}





while (i < quiz.length)
{
  question(quiz[i][0],quiz[i][1], i);
  i++;
}

/*
question("Name a programming language that's also a gem", 'RUBY');
question("Name a programming language that's also a snake", 'PYTHON');
question("What language do you use to style web pages?", 'CSS');
question("What language do you use to build the structure of web pages?", 'HTML');
question("What language do you use to add interactivity to a web page?", 'JAVASCRIPT');

/*
// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
 correct += 1; 
}
var answer2 = prompt("Name a programming language that's also a snake");
if ( answer2.toUpperCase() === 'PYTHON' ) {
 correct += 1; 
}
var answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
 correct += 1; 
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
 correct += 1; 
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
 correct += 1; 
}
*/
// output results
document.write("<p>You got " + correct + " out of " + questions + " questions correct.<p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");  
} else if (correct > 3) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");  
} else if (correct > 2) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");  
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}
            
