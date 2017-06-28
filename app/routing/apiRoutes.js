var workouts = require('../data/workouts.js');
var path = require('path')

module.exports = function (app) {

    app.get('/api/workouts', function(req, res){

        res.json(workouts);

    });

    app.post('/api/workouts', function (req, res) {

        console.log(req.body.q1);
        console.log(req.body.q2);
        console.log(req.body.q3);
        console.log(req.body.q4);
        console.log(req.body.q5)
        
    });

    workouts.push(req.body);

}