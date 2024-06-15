function promisify(callbackBasedFunction) {
    // callback example (error, data) => {console.log(data)}
}

// Example of a callback based function
// function callbackFn(arg1, arg2, callback) {
//     callback(null, arg1 + arg2);
// }
// const promisifiedFn = promisify(callbackFn);
// promisifiedFn(1, 2).then(console.log); // 3


module.exports = promisify;