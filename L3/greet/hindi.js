//! json gives data as objects
const obj = require('./greeting.json');

function greetHindi() {
    console.log(obj.hindi);
}
module.exports = greetHindi;