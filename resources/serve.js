// hello.js
//
// Launches a basic Node Express server for serving problem solutions

import express from 'express';

let exercise = process.argv[2] || "";
if (exercise.length == 0) {
    console.log('Please provide the path to an excercise solution when launching the server.');
    console.log('For example:\n');
    console.log('\t$ node resources/serve chapter13/helloworld');
    process.exit();
};

express()
    .use(express.static('./' + exercise))
    .listen(6502, () => {
        console.log(`Browse to http://localhost:6502 to see the exercise solution "${exercise}"`)
    });