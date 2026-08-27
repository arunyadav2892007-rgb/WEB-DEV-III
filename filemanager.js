const fs = require('fs');

console.log('Creating File...');
fs.writeFile('test.txt', 'H\n', (err) => {
  if (err) return console.log('Error creating file');
  console.log('File Created');

  console.log('Reading File:');
  fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) return console.log('Error reading file');
    console.log(data);

    fs.appendFile('test.txt', 'L\n', (err) => {
      if (err) return console.log('Error updating file');
      console.log('File Updated');

      fs.readFile('test.txt', 'utf8', (err, updatedData) => {
        if (err) return console.log('reading file');
        console.log(updatedData);

        fs.unlink('test.txt', (err) => {
          if (err) return console.log('Error deleting file');
          console.log('File Deleted');
        });
      });
    });
  });
});
