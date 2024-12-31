//! json gives data as objects
const obj = require('./greeting.json');

function greetEng() {
    console.log(obj.english);
}
module.exports = greetEng;