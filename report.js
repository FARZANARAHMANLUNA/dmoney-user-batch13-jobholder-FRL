const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection: `https://api.postman.com/collections/38810565-5c77dd47-5053-40ab-9a9c-1880c88877d8?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    // environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run is complete!');
});