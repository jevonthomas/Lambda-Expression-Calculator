console.log("hello");


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

let multiply = function(num1, num2) {
  let product = num1 * num2;
  return product;
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

let add = function(num1, num2) {
  let sum = parseInt(num1) + parseInt(num2);
  return sum;
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

let subtract = function(num1, num2) {
  let difference = num1 - num2;
  return difference;
};

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

let divide = function(num1, num2) {
  let quotient = num1 / num2;
  return quotient;
};


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

let calculator = function(num1, num2, operation) {
  let answer = operation(num1, num2);
  return answer;
}

let multButton = document.getElementById("multiply");
let addButton = document.getElementById("add");
let subButton = document.getElementById("subtract");
let divButton = document.getElementById("divide");
let firstNumberInput = document.getElementById("first");
let secondNumberInput = document.getElementById("second");

multButton.addEventListener("click", function() {
  let thisProduct = calculator(firstNumberInput.value, secondNumberInput.value, multiply);
  document.getElementById("calcOutput").innerHTML = `<h2>${thisProduct}</h2>`;
});

addButton.addEventListener("click", function() {
  let thisSum = calculator(firstNumberInput.value, secondNumberInput.value, add);
  document.getElementById("calcOutput").innerHTML = `<h2>${thisSum}</h2>`;
});

divButton.addEventListener("click", function() {
  let thisQuotient = calculator(firstNumberInput.value, secondNumberInput.value, divide);
  document.getElementById("calcOutput").innerHTML = `<h2>${thisQuotient}</h2>`;
});

subButton.addEventListener("click", function() {
  let thisDifference = calculator(firstNumberInput.value, secondNumberInput.value, subtract);
  document.getElementById("calcOutput").innerHTML = `<h2>${thisDifference}</h2>`;
});