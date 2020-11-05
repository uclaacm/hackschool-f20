const boilWater = () => {
    console.log('Start boiling!');
    setTimeout( () => {              
        console.log('Water boiled!');
        console.log('Start adding boiled water to bowl!');
        setTimeout( () => {
            console.log('Finished adding boiled water!');
            console.log('Start adding condiments!');
            setTimeout( () => {
                console.log('Finished adding condiments!')
            }, 1000);
        }, 2000);
        addRamen();
        addVeggies();
    }, 3000);                        
}        

const washVeggies = () => {
    console.log('Start washing!');
    setTimeout( () => {              // define a callback function that just console.log()'s a message
        console.log('Veggies washed!');
    }, 2000);                        // use 2000 millieconds to specify that we want to call the function 
}                                    // defined above after 2 seconds. 

function addRamen() {
    console.log('Ramen in da wata~');
}

function addVeggies() {
    console.log('Veggies in da pan~');
}

boilWater();
washVeggies();