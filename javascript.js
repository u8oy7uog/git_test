let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

let age = 11;
console.log(age); // outputs 11 to the console

age = 54;
 
console.log(age); // what will be output now?

const pi = 3.14;
console.log(pi); // What will be output?

console.log((3 + 2) - 76 * (1 + 1))
console.log(23+97+6+3+5+6+8-92)
console.log((4 + 6 + 9) / 77)
let a = 15
let b = 7 * a
const max = 57
const actual = max - 13
const procentage = actual / max
console.log(b+a+12)
console.log(procentage)

let userName = "John";
let admin = userName;
console.log(admin)

const myInt = 5;
const myFloat = 6.667;

console.log(myInt);   // prints 5
console.log(myFloat); // prints 6.667

console.log(typeof myInt);   // prints "number"
console.log(typeof myFloat); // prints "number"

const lotsOfDecimal = 1.7665849587;
const twoDecimalPlaces = lotsOfDecimal.toFixed(4);
console.log(twoDecimalPlaces)

let myNumber = "74";
myNumber = Number(myNumber) + 3;
console.log(myNumber)

let ben = 10
ben /= 5
console.log(ben)

let aa, bb, cc
aa = 10
bb = 20
cc = 30
aa = bb = cc = 3+2
console.log(aa, bb, cc)

let n = 2;
n = n + 5;
n = n * 2;
console.log(n)

let a1 = ("First number?", 1);
let b2 = ("Second number?", 2);

console.log(a1 + b2); 

const username = "Chris";
const greeting = `Hello, ${username}`;
console.log(greeting); // "Hello, Chris"

const mars = "Mars - "
const question1 = "second to Earth?"
const question2 = `${mars}${question1}`
console.log(question2)
console.log(mars,question1)

const cuteline = `Tall is short
short is tall`
console.log(cuteline)

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

let text1 = "HELLO WORLD";
let char = text1.charAt(6);
console.log(char)

let text2 = "HELLO WORLD";
let code = text2.codePointAt(0);
console.log(code)

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

const age1 = 25
if (age1 > 14 && age1 < 90)
    console.log("true")
else
    console.log("false")

if (age1 < 14 || age1 > 90)
    console.log("false")
else
    console.log("true")

if (!(age1 > 14 && age1 < 90))
    console.log("true")
else
    console.log("false")

////

let question = (`What is the “official” name of JavaScript?`)
let answer = 'ECMAScript'

if (question === 'ECMAScript') 
    console.log("Right!")
else
    console.log("You don’t know? ECMAScript!")

////

const fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Banana is yellow");
    break;

  case "apple":
    console.log("Apple is red or green");
    break;

  case "orange":
    console.log("Orange is orange");
    break;

  default:
    console.log("Unknown fruit");
}

function knownKing(king) {
  return king + " is very well known"
}

console.log(knownKing("king Euduard"))

const changer = "There is more to come, stay tuned!"
const newChange = changer.replace("stay tuned!", "monster!")
console.log(newChange)
