// const Emitter = require('./emitter'); //! this is the custom event emitter
const Emitter = require('events'); //! this is the nodejs event emitter
const events = require('./config').events;
// console.log(obj);

const emtr = new Emitter();
// console.log(emtr);

//! Bad practice
emtr.on(events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(events.FILEOPENED, () => {
    console.log('A file was opened.');
});

emtr.on(events.FILESAVED, () => {
    console.log('A file was saved.');
});

emtr.on('myAge', () => {
    console.log('I am 25 years old.');
});

emtr.emit(events.GREET);
emtr.emit(events.FILEOPENED);
emtr.emit(events.FILESAVED);
emtr.emit('myAge');