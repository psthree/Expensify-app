// console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

//There are 2 types of exports default and Named exports
//named
// export { square, add };

export { square, add, subtract as default };

