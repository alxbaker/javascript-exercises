const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	total = 0;
  for (const number of a) {
    total += number;
  }
  return total;
};

const multiply = function(a) {
	total = 0;
  for (const number of a) {
    if (total > 0) {
      total *= number;
    } else {
      total = number;
    }
  }
  return total;
};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(a) {
  if (a < 0) {
    return -1;

  } else if (a == 0) {
    return 1;
  } else {
    return (a * factorial(a - 1));
  }
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
