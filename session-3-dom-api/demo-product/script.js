console.log("If you see this in browser, that means our script is running.");

const myClockFace = document.querySelector("#clock-face");
const myButton = document.querySelector(".btn");

myClockFace.innerHTML = "23:59:59";
myButton.style.color = "red";
myButton.style.fontSize = "2em";

console.log("Here is the clock face element:");
console.log(myClockFace);
console.log("Here is the button element:");
console.log(myButton);