const promisify = require("./promisify");

describe('promisify', () => {
    describe('Given a callback-based function that succeeds', () => {
        const callbackFn = (arg1, arg2, callback) => {
            callback(null, arg1 + arg2);
        };
        const promisifiedFn = promisify(callbackFn);

        describe('When the function is called with valid arguments', () => {
            it('Then it should resolve the promise with the correct result', async () => {
                await expect(promisifiedFn(1, 2)).resolves.toBe(3);
            });
        });
    });

    describe('Given a callback-based function that fails', () => {
        const callbackFn = (arg1, arg2, callback) => {
            callback(new Error('Test error'));
        };
        const promisifiedFn = promisify(callbackFn);

        describe('When the function is called with valid arguments', () => {
            it('Then it should reject the promise with the error', async () => {
                await expect(promisifiedFn(1, 2)).rejects.toThrow('Test error');
            });
        });
    });

    describe('Given a callback-based function with no arguments', () => {
        const callbackFn = (callback) => {
            callback(null, 'no args');
        };
        const promisifiedFn = promisify(callbackFn);

        describe('When the function is called without arguments', () => {
            it('Then it should resolve the promise with the correct result', async () => {
                await expect(promisifiedFn()).resolves.toBe('no args');
            });
        });
    });

    describe('Given a callback-based function with multiple arguments', () => {
        const callbackFn = (arg1, arg2, arg3, callback) => {
            callback(null, arg1 + arg2 + arg3);
        };
        const promisifiedFn = promisify(callbackFn);

        describe('When the function is called with multiple arguments', () => {
            it('Then it should resolve the promise with the correct result', async () => {
                await expect(promisifiedFn(1, 2, 3)).resolves.toBe(6);
            });
        });
    });

    describe('Given an asynchronous callback-based function', () => {
        const callbackFn = (arg1, arg2, callback) => {
            setTimeout(() => {
                callback(null, arg1 + arg2);
            }, 100);
        };
        const promisifiedFn = promisify(callbackFn);

        describe('When the function is called with valid arguments', () => {
            it('Then it should resolve the promise with the correct result', async () => {
                await expect(promisifiedFn(1, 2)).resolves.toBe(3);
            });
        });
    });
});