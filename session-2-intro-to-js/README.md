<!-- omit in toc -->

# Hackschool Session 2: Introduction to JavaScript

**Date**: October 21, 2020

**Location**: Zoom

**Teachers**: Jamie Liu, Miles Wu

<!-- omit in toc -->

## Resources

- [Slides](https://docs.google.com/presentation/d/1UZ6EJ3UNhUvtJgBLDvHp0iAZ_1ReLZrjov1a5ujeiT8/edit?usp=sharing)
- [ACM Membership Attendance Portal](http://members.uclaacm.com/login)
- <!-- omit in toc -->

## What we'll be learning today

- [DOM API Sneak Preview](#dom-api-sneak-preview)
- [JavaScript](#javascript)
  - [Types and Values](#types-and-values)
  - [Variables](#variables)
  - [Functions](#functions)
  - [Conditionals](#conditionals)
  - [Objects](#objects)
  - [Arrays](#arrays)

## DOM API Sneak Preview

## JavaScript

To execute lines of JavaScript, we'll be using the Chrome Developer Tools:

1. Open a tab in Google Chrome
2. Right click and press Inspect
3. Select the "Console" tab (don't worry if you see some red warnings or output)

![](images/console.png)

To execute a line of code, type it into the console and press "Enter".

### Types and Values

### Variables

### Functions

### Conditionals

In programming, conditionals are a tool used to define branching paths in the code. The path taken depends on the result of some condition.

In a more tangible sense, you can think of this as decision making based on dyanmic factors. For example, if you were considering whether or not to study for a class, one of the factors you might consider is whether you have an exam coming up soon. If you do have an exam soon, you will choose to study, otherwise you will go watch Netflix.

Let's take this concept and see how it is applied in the code!

#### Simple `if` statement

The most basic way to introduce a conditional is using the `if` statement. The syntax for this looks like:

```js
if (condition) {
	// actions if true
}
```

Here, the `condition` refers to some true/false value. So any expression that would evaluate to either true or false could act as a condition (ex: `false`, `1 < 2`, `"a" === "a"`, etc).

The `if` statement essentially says to run the following code if the `condition` evaluates to true.

#### The `if-else` statement

The `if-else` statement is very similar to the `if` statement, but it also supplies the code that should run if the `condition` evaluates to false.

Here's a look at the syntax:

```js
if (condition) {
	// actions if true
} else {
	// actions if false
}
```

This pattern is more in line with our analogy of studying vs watching Netflix. If the `condition` is whether an exam is coming up, we will choose to either study or watch Netflix based on the result of that `condition`.

#### The `if-elseif-else` ladder

Finally, if we have a lot of different conditions to test and a lot of different actions corresponding to each condition, then we want to use an `if-elseif-else` ladder.

As the name implies, this pattern often looks like a ladder in the code. As shown below:

```js
if (cond1) {
	// actions if cond1 is true
} else if (cond2) {
	// actions if cond2 is true
} else if (cond3) {
	// actions if cond3 is true
} else {
	// actions if none are true
}
```

The way this code executes is top-down. First, the `if` condition will be tested and if it evaluates to `true`, the corresponding code block will run. If it evaluates to `false`, we try the next `else-if` condition and run the corresponding code if `true`. This process repeats until either one of the conditions evaluates to `true` or we get to the `else` block. Getting to the `else` means that none of the previous conditions were true.

NOTE: Using an `if-elseif` ladder implies that all of the different paths are mutually exclusive. Only one of the code blocks will actually run, after that we move on past the conditional statements. This means that if any of the conditions evaluates to `true` we do not keep testing the next condition, we just move on with the rest of our program.

### Objects
So far, we've only dealt with individual values being stored in variables for later use. But sometimes it is useful for us to want to keep a lot of related data together. For example, if you were recruiting for your club, you might want to group all of an applicant's information together.

We can do this by creating an object in JavaScript, which looks like this:

```js
const applicant = {
	email: "exampleemail@example.com",
	gpa: 3.0,
};
```

Let's break down the parts of this object so we can better understand how it works.

#### Object Properties

Every object consists of a set of key-value pairs. We refer to these keys as properties.

For example, the following object has two properties, `email` and `gpa`.

```js
const applicant = {
	email: "exampleemail@example.com",
	gpa: 3.0,
};
```

Properties can have any name you want, but often act as an appropriate label for the data it corresponds to.

#### Object Values

Every property in an object is associated with a value. This is the actual data being stored in the object.

In the same example, the value corresponding to the `gpa` property is `3.0`:

```js
const applicant = {
	email: "exampleemail@example.com",
	gpa: 3.0,
};
```

Object values can be of any type: number, string, boolean, etc. We can even have another nested object inside!


#### Accessing Object Properties
Now that we have all this data inside of an object, how do we "get a hold of" it? For example if we now want to store an individual item in the object inside a variable.

There are two ways of accessing an object properties: dot notation and bracket notation. Let's take a look at the syntax of each one.

Dot Notation:
```js
// myobj.propertyName
let gpa = applicant.gpa;
console.log(gpa); // prints "3.0"
```

Bracket Notation:
```js
// myobj["propertyName"]
let gpa = applicant["gpa"];
console.log(gpa); // prints "3.0"
```

#### Modifying/Deleting Object Properties
We can also use the dot and bracket notations to modify or remove properties within an object.

Dot Notation:
```js
// change email property
applicant.email = "joebruin@ucla.edu";
console.log(applicant.email); // prints "joebruin@ucla.edu"

// remove gpa property
delete applicant.gpa;
console.log(applicant); // gpa property gone
```

Bracket Notation:
```js
// change email property
applicant["email"] = "joebruin@ucla.edu";
console.log(applicant["email"]); // prints "joebruin@ucla.edu"

// remove gpa property
delete applicant["gpa"];
console.log(applicant); // gpa property gone
```

#### Object Methods
In some cases, it also makes sense to associate certain actions with an object. This is where object methods come in. An object method is essentially just a function attached to a specific object.

To use our previous example of having an applicant object, we can define the following:
```js
const applicant = {
	email: "exampleemail@example.com",
	gpa: 3.0,
	accept: () => {
		console.log("Congrats on being accepted!");
	}
}
```

Now our applicant object has an associated `accept` method, likely representing a recruiter's choice to accept them for the applied position.

We can call this method using dot notation:
```js
// obj.methodName()
applicant.accept(); // prints "Congrats on being accepted!"
```

That's all the basics of objects, if you want to learn more you can visit the docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics).

### Arrays
So now with objects we have a way to group related data together in a meaningful way (using key-value pairs). But this does not always make sense to do. For example if we ran a restuarant and collected rating scores out of 5 stars, it wouldn't make as much sense to assign some label/key to each rating. That would look something like:
```js
const ratings = {
	rating1: 3,
	rating2: 5,
	rating3: 4
	// and so on
}
```

In these situations where we want to store a large amount of related data but don't necessarily need meaningful labels for each piece of data, we can use arrays.

#### What is an Array?
An array can be simply described as a collection of values stored in a sequential manner. Each item in an array is usually referred to as an **"element"**. 

Here are some examples of what arrays can look like:
```js
let arr = []; // empty array
let ratings = [3, 5, 4, 4];
let stores = ["Ralphs", "Target", "Trader Joe's"];
let randomItems = [42, "Lightning McQueen", false, 365.25];
```

#### Accessing Array Elements
Just like with objects, we can access the individual items within an array. However, since arrays do not have keys, we use indices to access array elements.

An array index is just a number which references the element being accessed. Indices start as zero, as shown below:

![](images/array_index.png)

So if I wanted to get the first element of some array, I would write something like this:
```js
let index = 0;
let arr = [1, 2, 3, 4];
let firstElement = arr[index];
console.log(firstElement); // prints "1"
```

#### Basic Array Operations
Here are some operations you can perform on JavaScript arrays. You can learn more about arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

- `arr.length`: gives the number of elements in the array
- `arr.push(someValue)`: add an item to the end of the array
- `arr.pop()`: remove the last item from the array
- `arr.indexOf(someValue)`: get the index of a specific element in the array

#### Traversing Arrays
Often times when we have data in arrays, we will need to go through each element and do something with each one. For example, if we have an array of test scores, we might want to sum up all the test scores so that we can calculate an average!

Therefore, we need to introduce a new tool to help us go through arrays element by element (traverse arrays).

#### The `for-of` loop
We can use a tool called a loop to accomplish the task of traversing an array. It is called a loop since the code inside of it will repeat for every element in an array. Let's see what that looks like!

```js
for (const element of myArray) {
	console.log(element); // prints a new element each iteration
	//other statements
}
```

Above is an example of how we would use a `for-of` loop on an array. Let's break this down.

The first part of the `for` statement creates a variable called `element`. This variable will be used to reference the different elements in the array as the loop runs.
![](images/for-of-1.png)

We then reference which array we want to loop through:
![](images/for-of-2.png)

Everything in the following code block is called the "loop body" and will run each time the loop repeats.
![](images/for-of-3.png)

To read this statement literally, you can say "for every element of myArray, perform the following actions".

To illustrate what this is doing, let's take a look at an example with our `testScores` array:
```js
let testScores = [89.9, 45.2, 68.4, 77.5];
for (const score in testScores) {
	console.log(score);
}
```

The loop shown is going to run once for every element in the `testScores` array (so 4 times). The first time the loop body runs, `score` will take the value of `89.9` (the first element in the array). We log the score to the console, outputting "89.9". 

The loop then repeats, this time `score` takes the value of the second element: `45.2`. We log again, and this process repeats.

In this way, we can go through our entire array element by element and perform the same actions on each one no matter how large our array is.

If you imagine our `testScores` array containing 1000 different test scores, then using this loop would be much easier than accessing each element individually using the `testScores[index]` method.