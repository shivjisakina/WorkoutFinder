
// Storing the npm packages in variables
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

// Making my port 3000 or process.env.PORT for heroku deployment
var PORT = process.env.PORT || 3000;

var app = express();

// Using body-parser to parse user input
app.use(bodyParser.urlencoded({extended: false}));

//app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// Use all of the static files in the public folder
app.use(express.static('app/public'));

// Requiring the route files
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Listening to the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
