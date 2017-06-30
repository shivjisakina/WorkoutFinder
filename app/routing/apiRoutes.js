// Pseudo code because Im lost

// - require npm packages
// - get and post /api
// - use module exports to get it to server js
// - get the json variables
// - push the json variables into an object array
// - push the array to the html(?)
// - **do the math**
// - push the appropriate result to html?

// Requiring packages
var workouts = require('../data/workouts.js');
var path = require('path');

// Using module.exports to export this to server.js
module.exports = function (app) {

    // getting the /api/workouts which will show the json objects
    app.get('/api/workouts', function(req, res){

        res.json(workouts);

    });

    app.post('/api/workouts', function (req, res) {

        console.log(req.body.name);
        console.log(req.body.scores.length);

        var results = {};
        var differenceCalc = 100;

        // Looping through the object
        for (var i = 0; i < workouts.length; i++) {

            var subtractArray = [];
            var difference = 0;

            // Looping through the score and making sure there's no negative numbers
            for (var j = 0; j < workouts[i].scores.length; j++) {
                subtractArray.push(Math.abs(req.body.scores[j] - workouts[i].scores[j]))
            }

            console.log(subtractArray);

            for (var k = 0; k < subtractArray.length; k++) {
                difference += subtractArray[k];
            }

            console.log(difference);

            if (results == {}) {
                results= workouts[i];
                differenceCalc = difference;
            } else if (difference < differenceCalc) {
                results = workouts[i];
                differenceCalc = difference;
            }

            console.log(difference);
        }

        // Pushing results
        console.log("results" + results.name)
        workouts.push(req.body);
        res.json(results)

    });



    }