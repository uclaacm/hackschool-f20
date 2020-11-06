const promise = new Promise((resolve, reject) => {
    if (1 < 2) {
      resolve('Success!');
    }
    else {
      reject('Failed :(');
    }
});

const doOnSuccess = (successMessage) => {
    console.log(successMessage);
};
const doOnFailure = (failureMessage) => {
    console.log(failureMessage);
}; 

promise.then(doOnSuccess).catch(doOnFailure);
