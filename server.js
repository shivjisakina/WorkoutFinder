
// Storing the npm packages in variables
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var PORT = 3000;

var app = express();

// Lets server know that its text input
app.use(bodyParser.urlencoded({extended: false}));
//app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// Use static files
app.use(express.static('app'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get("/survey", function(req, res) {
    res.send("Welcome to the Survey Page!");
});

app.post('/survey', function (req, res) {
    console.log(req.body)
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
