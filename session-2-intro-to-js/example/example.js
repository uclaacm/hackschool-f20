5 + 5;

// This is a single line comment.

/*
This is a
multiline comment
*/

// numbers

420         // integers
3.14159263  // decimals
    - 273.15     // negative numbers
6.02e23     // we can use scientific notation, too!

// number operations

/* arithmetic */
6 + 9; // addition
6 - 9; // subtraction
6 * 9; // multiplication
6 / 9; // division

/* comparision */
5 === 6;    // equality
5 !== 6;    // inequality
5 < 6;      // less than
5 > 6;      // greater than
5 <= 6;     // less than or equal to
5 >= 6;     // greater than or equal to

// booleans

/* NOT */
!true;
!false;

/* AND */
true && true;
true && false;
false && false;

/* OR */
true || true;
true || false;
false || false;

// strings

"1234";
"I love boba";
"Halloween is approaching!! ooOoOOo scary";

// concatenation
"My favorite boba is " + "boba";

// comparison
"Hello" === "Hello";
"HI" !== "hi";

// variables

// declaration
let name;

// assignment
name = "jamie";

// reassignment
name = "miles";

// declare and assign in one line
let age = 21;

// using variables
let myName = "jamie";
console.log("Hello, " + myName);

let x = 2;
console.log(x * x);

// constants
const pi = 3.14;
// pi = 3.14159;      this is commented out bc it will produce an error

// functions
console.log("I really like thai tea with boba.");
console.log("I really like roasted oolong tea with boba.");
console.log("I really like milk tea with boba.");
console.log("I really like okinawa pearl milk tea with boba.");
console.log("I really like coffee milk tea with boba.");

console.log("I genuinely adore thai tea with boba.");
console.log("I genuinely adore roasted oolong tea with boba.");
console.log("I genuinely adore milk tea with boba.");
console.log("I genuinely adore okinawa pearl milk tea with boba.");
console.log("I genuinely adore coffee milk tea with boba.");

const helloWorld = () => {
    console.log("Hello, world!");
};
helloWorld();

const helloName = (name) => {
    console.log("Hello, " + name);
};
helloName("Jamie");

const triple = (x) => {
    x * 3;
};
triple(5);

const tripleWithReturn = (x) => {
    return x * 3;
};
tripleWithReturn(5);
const tripleFive = tripleWithReturn(5);
console.log(tripleFive);

const helloNameWithReturn = (name) => {
    return "Hello, " + name;
};

const msg = helloNameWithReturn("jamie");
console.log(msg);

const loveBoba = (drink) => {
    console.log("I really like " + drink + " with boba.");
};
loveBoba("thai tea");
loveBoba("roasted oolong tea");
loveBoba("milk tea");
loveBoba("okinawa pearl milk tea");
loveBoba("coffee milk tea");

const bobaBudget = (budget, numBoba) => {
    const spent = numBoba * 4;           // how much money I've spent
    const remaining = budget - spent;    // how much money I have left
    const canBuy = remaining / 4;        // how many bobas I can buy
    console.log("You can buy " + canBuy + " more bobas.");
};
bobaBudget(100, 2);

// CONDITIONALS

// simple if statement
const consumeBoba = (numBobas) => {
    if (numBobas < 0) {
        console.log("buy more boba now");
    }
    return numBobas - 1;
}

// if-else statement
const drinkBoba = (numBobas) => {
    if (numBobas < 10) {
        console.log("sip carefully");
    } else {
        console.log("gulp down those bobas");
    }
}

// if-elseif ladder
const shouldIGetBoba = (money, drinksLeft) => {
    if (money >= 5 && drinksLeft < 1) {
        console.log("Absolutely, you're out of boba!!!");
    }
    else if (money >= 5 && drinksLeft >= 1) {
        console.log("Maybe later... or soon");
    }
    else if (drinksLeft > 1) {
        console.log("You can't get more boba, but at least you have " + drinksLeft + " bobas left. Savor them while you can!");
    }
    else {
        console.log("Cry, you can't afford more boba and you don't have any left, there's nothing left for you");
    }
}

// OBJECTS
const bobaOrder = {};
bobaOrder.type = "Roasted Oolong Milk Tea";
bobaOrder.iceLevel = "Light";
bobaOrder.sweetness = 50;
bobaOrder.includeBoba = true;

console.log(bobaOrder);

