function promisify(callbackBasedFunc) {
    return (...args) => new Promise((resolve, reject) => {
        callbackBasedFunc(...args, (error, result) => {
            if (error) reject(error)
            resolve(result)
        })
    })
}

module.exports = promisify;