const boilWater = () => {
    console.log('Start boiling!'); 
    const start = Date.now();            // create a date object that contains the current time.
    while (Date.now() < start + 3000) {} // continuosly checks if 3000 milliseconds has passed.
    console.log('Water boiled!');
}

const washVeggies = () => {
    console.log('Start washing!');
    const start = Date.now();            // create a date object that contains the current time.
    while (Date.now() < start + 2000) {} // continuosly checks if 2000 milliseconds has passed.
    console.log('Veggies washed!');
}

function addVeggies() {
    console.log('Veggies in da pan~');
}

function addRamen() {
    console.log('Ramen in da wata~');
}