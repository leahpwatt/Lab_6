// // Lab 6 Results

// // Conversion 1:

function convertTemp (temp, unit) {
   if (unit === "F") {
 	console.log ((temp - 32) * 5/9);
 }
   else {
 	console.log ((temp * 9/5) + 32);
 }
}


var temp = 212;
var unit = "F";
convertTemp(temp, unit);


// // Conversion 2:


function convertTemp (temp, unit) {
   if (unit === "F") {
 	console.log ((temp - 32) * 5/9);
 }
   else {
 	console.log ((temp * 9/5) + 32);
 }
}


var temp = 32;
var unit = "F";
convertTemp(temp, unit);


// // Conversion 3:


function convertTemp (temp, unit) {
   if (unit === "F") {
 	console.log ((temp - 32) * 5/9);
 }
   else {
 	console.log ((temp * 9/5) + 32);
 }
}


var temp = 65;
var unit = "C";
convertTemp(temp, unit);


// // Conversion 4:


function convertTemp (temp, unit) {
   if (unit === "F") {
 	console.log ((temp - 32) * 5/9);
 }
   else {
 	console.log ((temp * 9/5) + 32);
 }
}


var temp = -40;
var unit = "F";
convertTemp(temp, unit);


// Bonus

function convertTemp () {
	var temp=prompt("Please enter a temperature.");
    var unit=prompt("Please enter C or F");
	if (unit === "F") {
 	alert ((temp - 32) * 5/9);
 }
   else {
 	alert ((temp * 9/5) + 32);
 }
}

convertTemp();