const fs = require('fs');
const path = require('path');
const neatCsv = require('neat-csv');

const filePath = path.join(__dirname, 'Tonerscsv.csv');
fs.readFile(filePath, (error, data) => {
  if (error) {
    return console.log('error reading files');
  }
  neatCsv(data)
    .then((parsedData) => console.log(parsedData));
});