const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(array) {
	// let total = 0;
  // for(let n of array) {
  //   total += n;
  // }
  // return total;

  const initialValue = 0;
  const newTotal = array.reduce(
    (oldValue, currentValue) => oldValue + currentValue, initialValue
    );
  return newTotal;
};

const multiply = function(numArray) {
  const initialValue = 1;
  const newValue = numArray.reduce(
    (oldValue, currentValue) => oldValue * currentValue, initialValue
  );
  return newValue;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(num) {
	let total = 1;
  if(num === 0) { // refactor this code
    return total;
  } else {
    for(let i = num; i > 0; i--) {
      total *= i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
