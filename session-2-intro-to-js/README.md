<!-- omit in toc -->
# Hackschool Session 2: Introduction to JavaScript

**Date**: October 21, 2020

**Location**: Zoom

**Teachers**: [Jamie Liu](https://github.com/jamieliu386), [Miles Wu](https://github.com/milesswu)

<!-- omit in toc -->
## Resources

- [Slides](https://docs.google.com/presentation/d/1UZ6EJ3UNhUvtJgBLDvHp0iAZ_1ReLZrjov1a5ujeiT8/edit?usp=sharing)
- [ACM Membership Attendance Portal](http://members.uclaacm.com/login)
- 
<!-- omit in toc -->
## What we'll be learning today

- [DOM API Sneak Preview](#dom-api-sneak-preview)
- [JavaScript](#javascript)
  - [`console.log()`](#consolelog)
  - [Comments](#comments)
  - [Types and Values](#types-and-values)
    - [Numbers](#numbers)
    - [Booleans](#booleans)
    - [Strings](#strings)
    - [Practice](#practice)
  - [Variables](#variables)
    - [Creating Variables](#creating-variables)
    - [Using Variables](#using-variables)
    - [Constants](#constants)
    - [Practice](#practice-1)
  - [Functions](#functions)
    - [Motivation](#motivation)
    - [Function Basics](#function-basics)
    - [Example: `helloWorld`](#example-helloworld)
    - [Example: `helloName`](#example-helloname)
    - [Example: `triple`](#example-triple)
    - [Example: `helloNameWithReturn`](#example-hellonamewithreturn)
    - [Example: `loveBoba`](#example-loveboba)
    - [Example: `bobaBudget`](#example-bobabudget)
    - [Practice](#practice-2)
  - [Conditionals](#conditionals)
  - [Loops](#loops)
  - [Arrays](#arrays)
  - [Objects](#objects)

## DOM API Sneak Preview

<!-- TODO -->

## JavaScript

To execute lines of JavaScript, we'll be using the Chrome Developer Tools:

1. Open a tab in Google Chrome
2. Right click and press Inspect
3. Select the "Console" tab (don't worry if you see some red warnings or output)

![](images/console.png)

To execute a line of code, type it into the console and press "Enter". 

Some important things about the console:
- When you type JavaScript into the console, it will show the result/value of your
  code before you press enter. For example:

  ![](images/console2.png)
- When you run lines of JavaScript in the console, the console "remembers" the
  previous lines you've run in the session.
- You can use your "up" arrow to find and run previous lines of code you've run.

<!-- omit in toc -->
### Before we get started...

We highly recommend **against** trying to code along in your own console, since
it might be hard to absorb what we're saying if you're trying to code at the
same time! Instead, we recommend you take some notes about any concepts that
are new to you, since you can always review the code we wrote at a later time.

This is a lot of material, especially if you're new to programming (the
concepts we're teaching this workshop would usually take multiple CS 31
lectures to cover). It's totally ok and normal if you feel lost or don't get
everything we teach during the workshop. Just try to get however much you can,
and know that learning how to code is a long process that you should take at
your own pace!

### `console.log()`

Throughout this workshop, we'll be using `console.log()` to print stuff out to
our console. This prints out whatever we put inside the parentheses. For example,
`console.log("Hello, world!")` will print `Hello, world!` to the console.

### Comments

In JavaScript, there are two ways to write comments:

```js
// This is a single line comment.

/*
This is a
multiline comment
*/
```

Comment don't affect how the code runs, but can be useful for "annotating"
your code.

### Types and Values

In JavaScript, there are several basic types of values we can use: numbers,
booleans, and strings.

#### Numbers

```js
420 // integers
3.14159263 // decimals
-273.15 // negative numbers
6.02e23 // we can use scientific notation, too!
```

We can also perform operations on values:

```js
/* arithmetic */
> 6 + 9 // addition
< 17

> 6 - 9 // subtraction
< -3

> 6 * 9 // multiplication
< 54

> 6 / 9 // division
< 0.6666666666666666
```

```js
/* comparision */
> 5 === 6 // equality
< false

> 5 !== 6 // inequality
< true

> 5 < 6 // less than
< true

> 5 > 6 // greater than
< false

> 5 <= 6 // less than or equal to
< true

> 5 >= 6 // greater than or equal to
< false
```

Note: If you're familiar with other programming languages (like C++, Python,
etc.), you might be wondering why we use `===` and `!==` in JavaScript instead
of `==` and `!=`. In JavaScript, `===` and `!==` are not the same as `==` and `!=`. We recommend you always use `===` and `!==` when writing JavaScript.

#### Booleans

Booleans can only have two values: `true` and `false`. We can use logical operators
with booleans: "NOT" (`!`), "AND" (`&&`), and "OR" (`||`).

```js
/* NOT */
> !true
< false

> !false
< true

/* AND */
> true && true
< true

> true && false
< false

> false && false
< false

/* OR */
> true || true
< true

> true || false
< true

> false || false
< false
```

#### Strings

A string is just a sequence of characters inside of quotes. Either
single quotes or double quotes will work (in some other programming languages,
single quotes and double quotes mean different things).

```js
"1234"
"I love boba"
"Halloween is approaching!! ooOoOOo scary"
```

We can concatenate (join) strings together using the `+` operator:

```js
> "My favorite boba is " + "boba"
< "My favorite boba is boba"
```

We can also compare strings for equality/inequality (this comparison is
case-sensitive):

```js
> "Hello" === "Hello"
< true

> "HI" !== "hi"
< true
```

#### Practice

What will get printed in each of these questions? (Try to figure it out
without actually running the code.)

1. `console.log(1 + 11)`
2. `console.log("1" + "11")`
3. `console.log("hello" !== "HELLO")`
4. `console.log(5 === 8)`
5. `console.log(!true)`
6. `console.log((4 < 6) && (8 !== 10))`

<details>
   <summary>Solutions:</summary>
   <ol>
      <li><code>12</code></li>
      <li><code>111</code></li>
      <li><code>true</code></li>
      <li><code>false</code></li>
      <li><code>false</code></li>
      <li><code>true</code></li>
   </ol>
</details>

### Variables

Sometimes it can be convenient to store a value and reuse it without having to
type the same value over and over again. It can also be convenient to give
certain values names that describe what they are.

This is what variables are used for! Variables give us a way to refer to values
by a name.

#### Creating Variables

We can **declare** a variable using `let`:

```js
let name;
// note: in JavaScript, the semi-colon (;) is optional
// we will always use it in order to be consistent
```

We can then **assign** a value to the variable using `=`:

```js
name = "jamie";
```

We can also **change** a variable's value using `=` to re-assign the value:

```js
name = "miles";
```

We can also declare a variable and assign it a value in a single line:

```js
let age = 21;
```

#### Using Variables

```js
let name = "jamie";
console.log("Hello, " + name)

let x = 2;
console.log(x * x)
```

#### Constants

If you don't want your variable's value to change, you can declare it using
the `const` keyword instead of `let`:

```js
const pi = 3.14;
```

If you later try to assign a new value to this constant, you'll get an error.

```js
> pi = 3.141592653;
< Uncaught TypeError: Assignment to constant variable.
```

#### Practice

What will be printed to the console in each of these questions?

1. ```js
   let width = 10;
   let height = 2;
   console.log(width * height);
   ```
2. ```js
   let iLoveBoba = true;
   let bobaIsGood = true;
   console.log(iLoveBoba && bobaIsGood);
   ```
3. ```js
   let today = "Wednesday";
   console.log("Today is " + today);
   ```
4. ```js
   let uclaScore = 100;
   let uscScore = 0;
   console.log(uclaScore > uscScore);
   ```

<details>
   <summary>Solutions:</summary>
   <ol>
      <li><code>20</code></li>
      <li><code>true</code></li>
      <li><code>Today is Wednesday</code></li>
      <li><code>true</code></li>
   </ol>
</details>

### Functions

#### Motivation

Imagine I want to write some code to print a bunch of different bobas I like.
I might write something like this:

```js
console.log("I really like thai tea with boba.");
console.log("I really like roasted oolong tea with boba.");
console.log("I really like milk tea with boba.");
console.log("I really like okinawa pearl milk tea with boba.");
console.log("I really like coffee milk tea with boba.");
// ... you get the idea
```

You can see there's a lot of repetition here! What if I wrote all this code and
then decided I wanted them all to say "I genuinely adore ... with boba!"? Then
I'd need to edit every single line to reflect those changes. That'd be a total
pain!!

#### Function Basics

That's where functions come in!

A function is something that performs an action (this sounds horribly vague,
but hopefully some examples help clear things up). A function can have inputs
(we call them **arguments**), and a function can **return** a value.

Let's see what functions look like! There are two ways to write functions in
JavaScript:

```js
// first way
const myFunction = (arg1, arg2) => {
  // stuff the function does
};

// second way
function myFunction(arg1, arg2) {
  // stuff the function does
};
```

In this workshop we will be using first way! Let's take a closer look at each
part of the function:

```js
const myFunction = (arg1, arg2) => {
  // stuff the function does
};
```

- "`const myFunction =`": declares a constant named "myFunction", and assigns it
- "`(arg1, arg2)`": names the two arguments the function accepts
- "`=>`": I think of the arrow as saying "goes to"
- the function's body goes inside the braces: this is where the actual work happens
- remember the semi-colon at the end!

#### Example: `helloWorld`

Let's write a function named `helloWorld` that prints "Hello, world!":

```js
const helloWorld = () => {
  console.log("Hello, world!");
};
```

Note that this function does not take in any arguments, but we still include the
parentheses!

Let's try calling (using) the function. We do this by saying the function name
followed by parentheses:

```js
helloWorld();
```

#### Example: `helloName`

Let's write a function called `helloName` that says hello to a name that we pass in:

```js
const helloName = (name) => {
  console.log("Hello, " + name);
};
```

Now we'll call our function. Since the function needs an argument, we'll give
it an argument in the parentheses:

```js
helloName("Jamie");
```

#### Example: `triple`

Let's write a function named `triple` that triples a numeric input:

```js
const triple = (x) => {
  x * 3;
};
```

Now let's call (use) the function to compute what triple 5 is:

```js
> triple(5);
< undefined
```

Uh oh, all we got back was undefined! What happened? We never returned the answer
in our function! Let's fix that:

```js
const tripleWithReturn = (x) => {
  return x * 3;
};
```

Now when we call the function, it returns a value!

```js
> tripleWithReturn(5);
< 15
```

However, we can't do much with the value, since we don't save it anywhere. Let's
make a variable that stores the answer so we can use it later:

```js
const tripleFive = tripleWithReturn(5);
console.log(tripleFive);
```

Remember to always return a value in your function if you want to use it later!

#### Example: `helloNameWithReturn`

Let's write another version of `helloName`, but instead of printing the message,
return it!

```js
const helloNameWithReturn = (name) => {
  return "Hello, " + name;
};
```

```js
const msg = helloNameWithReturn("jamie");
console.log(msg);
```

#### Example: `loveBoba`

Let's write a function to solve [our problem from earlier](#motivation):

```js
const loveBoba = (drink) => {
  console.log("I really like " + drink + " with boba.");
};
```

Now I could proclaim my love for boba like this:

```js
loveBoba("thai tea");
loveBoba("roasted oolong tea");
loveBoba("milk tea");
loveBoba("okinawa pearl milk tea");
loveBoba("coffee milk tea");
```

If I decided I wanted it to say "I genuinely adore ..." instead, I would only
need to edit a single line in the function!

#### Example: `bobaBudget`

Let's write a function called `bobaBudget` that has two arguments:
- `budget`: how much money I can spend on boba
- `numBoba`: the number of bobas I've bought already

The function should print out how many bobas I can still buy (fractions of boba
is fine). We'll assume that boba costs $4 always.

```js
const bobaBudget = (budget, numBoba) => {
  const spent = numBoba * 4;           // how much money I've spent
  const remaining = budget - spent;    // how much money I have left
  const canBuy = remaining / 4;        // how many bobas I can buy
  console.log("You can buy " + canBuy + " more bobas.");
};
```

Note: We can create variables inside of our functions! This can make it easier
to read and understand what our function does. Try to give your variables and
functions informative names to make them easier to understand.

Let's try calling our function:

```js
bobaBudget(100, 2);
```

#### Practice



### Conditionals

### Loops

### Arrays

### Objects
