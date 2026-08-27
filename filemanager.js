const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');


console.log('Creating File...');
fs.writeFileSync(filePath, 'Hello Node.js\n', 'utf8');
console.log('File Created');


console.log('Reading File:');
const content1 = fs.readFileSync(filePath, 'utf8');
console.log(content1.trim());


fs.appendFileSync(filePath, 'Learning FS Module\n', 'utf8');
console.log('File Updated:');
const content2 = fs.readFileSync(filePath, 'utf8');
console.log(content2.trim());


fs.unlinkSync(filePath);
console.log('File Deleted');