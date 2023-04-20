// let csvToJson = require('convert-csv-to-json');

// let fileInputName = 'movies.csv';
// let fileOutputName = 'movies.json';

// csvToJson
//     .supportQuotedField(true)
//     .fieldDelimiter(',')
//     .generateJsonFileFromCsv(fileInputName, fileOutputName);

const csvToJson = require('csvtojson');
const fs = require('fs');
const csvFilePath = 'movies.csv';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

csvToJson({
    // Custom reviver function to convert numbers to their correct data type
    revive: (key, value) => {
        if (value === 'NA') {
            return null; // replace 'NA' with null
        } else if (isNumeric(value)) {
            return +value; // convert string to number
        }
        return value;
    },
})
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        fs.writeFileSync(
            'output.json',
            JSON.stringify(jsonObj, (key, value) => {
                if (value === 'NA') {
                    return null; // replace 'NA' with null
                } else if (isNumeric(value)) {
                    return +value; // convert string to number
                }
                return value;
            }),
            'utf-8',
            function (err) {
                console.log(err);
            }
        );
    })
    .catch((err) => {
        console.error(err);
    });

// csvToJson({
//     // Custom reviver function to convert numbers to their correct data type
//     revive: (key, value) => {
//         if (isNumeric(value)) {
//             return +value; // convert string to number
//         }
//         return 999;
//     },
// })
//     .fromFile(csvFilePath)
//     .then((jsonObj) => {
//         console.log(jsonObj);
//         fs.writeFileSync(
//             'output.json',
//             JSON.stringify((jsonObj, (key, value) => {
//                 // Custom replacer function to prevent numbers being cast as strings
//                 if (isNumeric(value)) {
//                     return +value; // convert string to number
//                 }
//                 return value;
//             })),
//             'utf-8',
//             function (err) {
//                 console.log(err);
//             }
//         );
//     })
//     .catch((err) => {
//         console.error(err);
//     });
