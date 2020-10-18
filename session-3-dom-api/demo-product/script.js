console.log("If you see this in browser, that means our script is running.");

const myClockFace = document.querySelector("#clock-face");
const myButton = document.querySelector(".btn");
const body = document.querySelector("body");

myClockFace.innerHTML = "23:59:59 PM";
myButton.style.color = "red";
myButton.style.fontSize = "2em";
body.style.backgroundColor = "#ffb1b1";

console.log("Here is the clock face element:");
console.log(myClockFace);
console.log("Here is the button element:");
console.log(myButton);

const tick = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US');
    myClockFace.innerHTML = time;
};

// setTimeout(tick, 3 * 1000);
setInterval(tick, 1000);

const onButtonClick = () => {
    body.style.backgroundColor = "#b1b1ff";
};

myButton.addEventListener("click", onButtonClick);