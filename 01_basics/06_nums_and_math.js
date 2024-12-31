const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); //convert Number into the string and give the length of the string in the output
// console.log(balance.toFixed(1)) // output : 100.0

const otherNumber = 23.45454;
// console.log(otherNumber.toPrecision(4)); // this will give only 4 digit in the output.
// output : 23.45

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //output : 10,00,000.


//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-5)) // Math.abs() : this method used for the converting the negative number to positive number.
// NOTE : if the Number is already positive then the Number stay as it is.

console.log(Math.round(4.4)); // output : 4
console.log(Math.round(4.6)); // output : 5
//NOTE : if the Number is given in the point value then convert it into the round figure

console.log(Math.ceil(4.2)) // output : 5
console.log(Math.floor(4.2)) // output : 4
/*
NOTE : 
-> Math.ceil(): this method is used for the round the number in upper value.
-> Math.floor() : this method is used for the round the number in lower value.
*/

// console.log(Math.random()) // this will give the any random number in between 0 and 1/.
console.log(Math.ceil(Math.random()*10 + 1))


// this is the method for the finding the random value in between min and max.
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)