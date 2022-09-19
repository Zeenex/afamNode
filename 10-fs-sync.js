const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(second)
// console.log(first)

writeFileSync('./content/result-sync.txt',`Hello this is the result of the apps: ${first},${second}`,{flag: 'a'})

console.log('Done with the task');
console.log('starting the next one');