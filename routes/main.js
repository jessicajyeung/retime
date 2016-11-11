/*
 * GET home page.
 */

app.get('/', function(req, res, next){
  res.render('index');
});

var data = require("../data.json");

exports.addTask = function(req, res) {
	// Your code goes here
  console.log("Created!");
}
