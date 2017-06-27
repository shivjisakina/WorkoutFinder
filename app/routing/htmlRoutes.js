// require
var path = require("path");

module.exports = function (html) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, 'app/public/survey.html'));
    });

    app.get("/survey", function(req, res) {
        res.send("Welcome to the Survey Page!");
    });

    app.post('/survey', function (req, res) {
        console.log(req.body)
    });

}

