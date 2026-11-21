const add = function(a, b) {
	return a+b;
};

const subtract = function(x, y) {
	return x-y; 
};

const sum = function(item) {
	return item.reduce((first ,next) => first+next,0)
};

const multiply = function(item) {
  return item.reduce((acc, next) => acc*next)
};

const power = function(base, exponant) {
	return base**exponant; 
};

const factorial = function(num) {
  let result =1; 
	for (let i = 2; i<=num; i++) {
     result *=i;
  }
  return result; 
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
