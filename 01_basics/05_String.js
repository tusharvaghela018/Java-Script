const name = "tushar";
const repoCount = 100;

// console.log(name +" "+repoCount + " count");
// console.log(`hello my name is ${name} and my repoCount is ${repoCount}.`)
// console.log(`hello my name is tushar vaghela and my repoCount is the ${100} plus.`);

const gameName = new String("tusharCV");
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(0,4);
const anotherString = gameName.slice(-8,-4);
// console.log(anotherString);

const newStringOne = "     tushar    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://tushar.com/tushar%20vaghela";
console.log(url.replace("%20","-"));
console.log(url.includes("tushar"));

console.log(gameName.split("-"));

//All methods
/*

*/