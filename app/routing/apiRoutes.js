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
    app.get('/api/workouts', function (req, res) {

        res.json(workouts);

    });

    app.post('/api/workouts', function (req, res) {

        console.log(workouts)

        var results = {};
        var differenceCalc = 100;

        // Looping through the object
        var scores = [parseInt(req.body.q1), parseInt(req.body.q2), parseInt(req.body.q3), parseInt(req.body.q4), parseInt(req.body.q5)];

        for (var i = 0; i < workouts.length; i++) {

            var subtractArray = [];

            var difference = 0;

            // Looping through the score and making sure there's no negative numbers
            for (var j = 0; j < workouts[i].scores.length; j++) {
                subtractArray.push(Math.abs(scores[j] - workouts[i].scores[j]))
            }

            console.log(subtractArray);

            for (var k = 0; k < subtractArray.length; k++) {
                difference += subtractArray[k];
            }

            console.log(difference);

            if (results == {}) {
                results = workouts[i];
                differenceCalc = difference;
            } else if (difference < differenceCalc) {
                results = workouts[i];
                differenceCalc = difference;
            }

            console.log(difference);

        }

        // Pushing results
        console.log("results " + results.name);

        // Setting the format for the data because I was getting two arrays for scores
        var data = {name: req.body.name, image: req.body.image, scores: scores}

        workouts.push(data);
        res.json(results)


    });


}