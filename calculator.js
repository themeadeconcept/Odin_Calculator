function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// using reduce here will return a single value (sum).  Reduce will apply a function to each element in the array and return a single value - 0 is the initialValue
function sum(array) {
  return array.reduce((total, current) => total + current, 0);
}

function multiply(array) {
  // This will iterate through the lenght of the array
  return array.length
    ? array.reduce((total, nextItem) => total * nextItem) // truthy
    : 0; // return 0 if no values (falsy)
}

function power(a, b) {
  return Math.pow(a, b);
}

function factorial(n) {
  // factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // set counter (i) to the value of n, and have the loop run while the counter is greater than 0.  Decrement the counter until its 1 (not 0) because factorial is 5 * 4 * 3...
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact *= i;
  }

  return fact;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
