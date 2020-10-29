console.log("hello, if you see me, it works");

const myClockFace = 
    document.querySelector("#clock-face");
const myButton = 
    document.querySelector(".btn");
const body = 
    document.querySelector("body");

// myClockFace.innerHTML = "23:59:59 PM";
myButton.style.color = "red";
body.style.backgroundColor = "#ffb1b1";


/**
 *  Solution to challenge 2
 */

const getRandomNumber = (lo, hi) => {
    return Math.floor(Math.random() * (hi - lo)) + lo;
};

const numToHex = (n) => {
    return n.toString(16).padStart(6, '0');
};

const getRandomColor = () => {
    const rgb = numToHex(getRandomNumber(0, 1 << 24));
    const colorStr = '#' + rgb;
    return colorStr;
};

const tick = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US');
    myClockFace.innerHTML = time;
    // solution for challenge 2
    body.style.backgroundColor = getRandomColor();
};

// solution to challenge 1
tick();
setInterval(tick, 1000);

const setBackgroundColorToSomething = () => {
    body.style.backgroundColor = "#b1b1ff";
};

myButton.addEventListener("click", 
    setBackgroundColorToSomething);

console.log(myClockFace);
console.log(myButton);
console.log(body);
