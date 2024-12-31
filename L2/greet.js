// Module -> A piece of code that is used accross all the nodejs application
function greet(a, b) {
  console.log("Hello Yash 👋", a + b);
}

function sub(a, b) {
  const result = a > b ? a - b : b - a;
  return result;
}

// module.exports = greet;

// module.exports //! returns an empty object

// module.exports = {
//   greet,
//   sub
// }
