const utils = require('node:util');

// Example of a callback based function
function callbackFn(arg1, arg2, callback) {
    callback(null, arg1 + arg2);
}

const promisifiedFn = utils.promisify(callbackFn);

promisifiedFn(1, 2).then(console.log); // 3
