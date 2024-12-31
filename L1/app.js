// function statement
function greet() {
  console.log("Hello 👋");
}
greet();

// functions are first-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
const greetMe = function() {
  console.log("Hello, from the function expression");
};
greetMe();

// use a function expression on the fly
logGreeting(function() {
  console.log("Hello, from the function expression on the fly");
});