const promise = new Promise((resolve, reject) => {
    if (4 < 2) {
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
