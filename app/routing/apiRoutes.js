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
var path = require('path')

// Using module.exports to export this to server.js
module.exports = function (app) {

    // getting the /api/workouts which will show the json objects
    app.get('/api/workouts', function(req, res){

        res.json(workouts);

    });

    app.post('/api/workouts', function (req, res) {

        // Trying to get the questions out
        console.log(req.body.name);
        console.log(req.body.q1);
        console.log(req.body.q2);
        console.log(req.body.q3);
        console.log(req.body.q4);
        console.log(req.body.q5)

    });

}