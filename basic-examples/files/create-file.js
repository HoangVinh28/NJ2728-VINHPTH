//Creat a new file using the appendFile()
/* 
const fs = require("fs");
const fileName = "mynewfile1.txt";
const content = "Hello content!";
fs.appendFile(fileName, content, function (err) {
  if (err) {
    throw err;
  }
  console.log("Saved");
}); */

//Creat a new, empty file using the open()

const fs = require("fs");
fs.open("mynewfile1.txt", "w", function (err, file) {
  if (err) {
    throw err;
  }
  console.log("Save!");
});

//Creat a new file using the writeFile()

/* const fs = require('fs')
fs.writeFile('mynewfile3.txt','Hello Vinh!', function (err) {
    if (err) {
        throw err;
    }
    console.log('Save!');
}); */
