// Global Object

setTimeout(() => {
    console.log('Hey!');
    clearInterval(int);
}, 1000);

const int = setInterval(() => {
    console.log('Interval');
}, 1000);

console.log(__dirname);
console.log(__filename);