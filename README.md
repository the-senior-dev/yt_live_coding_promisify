## Live Coding Challenge by theSeniorDev

### Part 1

Write a function that mimics the behaviour of the `promisify` function in Node.js. The function should take a function that accepts a callback as its last argument and return a new function that returns a promise. Example usage:

```javascript
const fs = require("fs");
const promisify = require("./promisify");

const readFile = promisify(fs.readFile);

readFile("README.md", "utf8").then(console.log).catch(console.error);
```

### Part 2

Modify the function from Part 1 so it works with `async/await` as well. Example usage:

```javascript
const fs = require("fs");
const promisify = require("./promisify");

const readFile = promisify(fs.readFile);

(async () => {
  try {
    const content = await readFile("README.md", "utf8");
    console.log(content);
  } catch (error) {
    console.error(error);
  }
})();
```

### Part 3 - Follow-up Questions

- How are promises treated by the event loop in comparison to callbacks?
- Why is `error` the first argument in Node.js callbacks?
- What is the impact of using `Promises` in terms of performance?
