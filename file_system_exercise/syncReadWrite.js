
const fs =  require('fs');

const file = fs.readFileSync('./sync_example.txt', 'utf8');
console.log(file)
const edited = fs.writeFileSync('./sync_example.txt', 'Just a test file for synchronous testing');
console.log(edited)