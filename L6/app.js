const fs = require('fs');

// TODO : Reading a file
//! readFileSync() is blocking and synchronous
// console.log('start');
// const data = fs.readFileSync('input.txt', 'utf-8');
// console.log(data);
// console.log('end');

//! readFile() is non-blocking and asynchronous
// console.log('start');
// fs.readFile('input.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log('end');

// TODO : Writing a file
// fs.writeSync
// fs.writeFile('output.txt', 'Hello World!', (err) => {
//   if (err) throw err;
// });

// fs.appendFile('output.txt', '\nMy name is Yash', (err) => {
//   if (err) throw err;
// });

// TODO : Deleting a file
// fs.unlink('output.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted!');
// });


//? Recommended way to read a file
// const readStream = fs.createReadStream('input.txt', 'utf-8');

// readStream.on('data', (chunk) => {
//   console.log(chunk);
// });

// readStream.on('end', () => {
//   console.log('Reading completed');
// });

//? Recommended way to write a file
// const writeStrem = fs.createWriteStream('output.txt', 'utf-8');
// writeStrem.write('Hello, Welcome to JS World!');

// TODO : Pipe - Read data from one file and write to another file
const readStream = fs.createReadStream('input.txt', 'utf-8');
const writeStream = fs.createWriteStream('output.txt', 'utf-8');

readStream.pipe(writeStream);
