const greet1 = require('./greet1');
const greet2 = require('./greet2');

greet1();
// greet2(); //! Error: greet2.greet is not a function
// console.log(greet2); //! it gives object => { greeteeee: [Function: greet] }

greet2.greeteeee();