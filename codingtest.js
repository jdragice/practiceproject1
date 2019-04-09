// in-line comment
var number = 5;
/* this is inside a comment */

var myName = "Jelena"
myName = "Bob"

let ourName = "freeCodeCamp"
const pi = 3.14

var a; //declaring a variable 
var b= 2; // declaring and assigning it 
console.log(a);
a= 7; 
b = a; 
console.log(a); // allows you to see things in console

var a = 9; 

// Javascript is case sensitive instead use camel case

//adding nubers 
var sum = 10+10;
console.log(sum);
// subtract numbers 
var difference = 45-30;
console.log(difference);
//multiply numbers 
var multiply = 32 * 32;
console.log(multiply);
//divide numbers
var quotient = 66 /0 ;
console.log(quotient);

// increment number means to add a +1 to it 
var myVar = 87;
myVar= myVar + 1;
//or use this (it means the same as above)
myVar++ 

// decrementing numbers means - 1 to it 
var myVar = 87;
myVar= myVar - 1;
//or use this 
myVar--

// create decimal numbers 
var thisDecimal = 9.7
// multiply decimals 
var product = 2.0 * 2.5;
console.log(product);
//divide decimals 
var productNow = 2.0 / 2.5;
console.log(productNow);
// Finding a remainder looks like a % sign 
var remainder;
remainder = 11 % 3;
// compound Assignment with Augmented Addition 
a = a + 12;
// instead do this shortcut 
a += 12;
b += 9;

// compound Assignment with Augmented Subtraction/ multiplication/division
a = a - 12 ;
// instead you can do a shortcut 
a -= 12;

//declare string value 
var firstName= "Jelena" // <-- this is a string anything with "" or with ''

//Escaping Literal Quotes in Strings with \ example below
var myStr = "I am a \"double quoted\" string inside"
//Quoting Strings with Single Quote (instead of using what is above you can use the below as well)
var storyWe = 'We are "awesome"';
//escape sequence in strings 
/* what to use in case of escaping in strings:
\'' single quotes
\"" double quotes 
\\ backslash 
\n newline
\r carriage return 
\t tab
\b backspace 
\f form feed 
*/ 
// concatenating strings with plus opeerator 
var ourStar = "I come first" + "I come second";
var myStr = "this is the start" + "this is the end";
//concatenating strings with plus/ equal operator instead of doing what you did at top you combine
var ourStar = " I come first";
ourStar += "I come second";
//constructing strings with variables (instead of combining the strings you add the variable inside another variable)
var firstName = "Jelena";
var fullName = "My name is " + firstName + " Dragicevic";
//attending variables to strings (you are adding the variables to one another with different strings put together)
var history = "Washington was the ";
var history2 = "president of USA.";
history += history2; 
//Find length of string (it is the .length after a variable is named)
var firstName = "Jelena";
var lengthOfName = firstName.length;
//Bracket Notation to Find First Character in String(shows the letter of the character in the below case it will be D) 
var firstLetterOfLastName = "";
var lastName = "Dragicevic";
firstLetterOfLastName = lastName[0];
//string immutability (cant be altered)
var storyMe= "jello world";
storyMe = "Hello World";
//Bracket Notation to find Nth Character in string 
var lastName = "dragicevic";
var bracketNumber = lastName[3];
// Bracket to find last Character in the string 
var firstName = "Jelena";
var firstLetterOfLastName = firstName[firstName.length-1];
//or get other Number of character
firstName.length- 2, 3, 4;
// word blanks game creating a story 
//what this is doing: function is like a command to do something and naming that command you have options to choose which are verb noun and adjective , then you are creaing a memory stored information called results which then results strings are created to know what command to do and then once added the return it returns the variable results and then the console.log is the names you want to have when you want to run that function and everytime it can be something different

function wordGame(adjective,noun,verb){
var results = "";
results += "We are a " + adjective + "and we dont " + verb "that tonight it will be " + noun;
return results; 
}
//write the display name and then write the functionsname and what you want it to say
console.log(wordGame("big","ran","dog"));
//arrays 
var arrays= [jelena,23];
//nested Arrays (adding arrays into one another)
var myArray = [["Bulls",23]["today",73]];
//Access Array Data with Indexes 
var ourArray = [50,60,70];
var ourData = ourArray[0];
//Modify Array Data with Index (you can modify the arrays)
var ourAray = [30, 40, 50];
var ourData[2] = 45;
console.log(ourData);









