let operation = prompt("Enter the operation (+, -, *, /):");
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));


let result;
switch (operation) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;
  default:
    console.log("Invalid operation!");
    
}


console.log("Result:", result);
alert ("Result:", result);