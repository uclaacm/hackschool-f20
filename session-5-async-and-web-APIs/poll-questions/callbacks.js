const displayAnswer = (sum) => {
    console.log("Answer: " + sum);
    return sum;
}

const adder = (callback, x, y) => {
    var sum = x + y;
    return callback(sum);
;}

const subtractor  = (callback, x, y) => {
    var product = x - y;
    return callback(product);
};

var x = adder(displayAnswer, 7, 5);
subtractor(displayAnswer, x, 9);