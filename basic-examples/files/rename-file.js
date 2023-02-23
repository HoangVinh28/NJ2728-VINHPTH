const fs = require('fs');
fs.rename( 'hoangvinh.txt','mynewfile1.txt', function (err) {
    if (err) {
        throw err;
    }
    console.log('Save');
})