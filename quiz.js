// variables
var correct = 0;
var medal = "";

// prompt
var answer1 = prompt("What year was Washington University in St. Louis established?");
var answer2 = prompt("True or False: The motto, 'per veritatem vis', means 'truth through strength'. ");
var answer3 = prompt("Who is the chancellor?");
var answer4 = prompt("What animal is the mascot?");
var answer5 = prompt("Who is the provost?");


// if statement
if ( answer1 === '1853' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'FALSE' || answer2.toUpperCase() === 'F' ) {
 correct += 1;
}

if ( answer3.toUpperCase() === 'WRIGHTON' || answer3.toUpperCase() === 'MARK WRIGHTON' || answer3.toUpperCase() === 'CHANCELLOR WRIGHTON' || answer3.toUpperCase() === 'MARK S. WRIGHTON' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'BEAR' || answer4.toUpperCase() === 'BROWN BEAR' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'THORP' || answer5.toUpperCase() === 'HOLDEN' || answer5.toUpperCase() === 'HOLDEN THORP' || answer5.toUpperCase() === 'PROVOST THORP' ) {
 correct += 1;
}
if (correct == 5)
{
medal = "GOLD";

}

else if (correct == 4)
{
	medal = "SILVER";
}

else if (correct == 3)
{
	medal = "BRONZE";
}

// output results
document.write("<p>You got " + correct + " out of 5 correct.</p>");

if (correct >=3)
{
	document.write("<p>You received the " + medal + " medal</p>");
}
else
{
	document.write("<p> Sorry, you did not qualify for a medal.</p>")
}
