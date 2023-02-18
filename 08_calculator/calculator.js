const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let multiply = 1;
  array.forEach(element => {
    multiply *= element;
  });
  return multiply;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  let factorial = 1;

  if(num === 0 || num ===1){
    return factorial;
  }

  for(let i = 2; i <= num; i++)
  {
    factorial *= i;
  }
  return factorial;
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
