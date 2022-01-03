const fs = require('fs');

const readFilePromisified = destination =>
    new Promise((resolve, reject) => {
        fs.readFile(destination, 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });

const writeFilePromisified = (destination, data) =>
    new Promise((resolve, reject) => {
        fs.writeFile(destination, data, 'utf8', (err, result) => {
            if (err) return reject(err);
            return resolve(result);
        });
    });

module.exports = {
    readFilePromisified,
    writeFilePromisified,
};
