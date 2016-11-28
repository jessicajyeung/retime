// Get all of our user data
var data = require('../data.json');

exports.view = function(req, res) {
	// controller code goes here
	var task = req.params.name;
	console.log('The taskname is: ' + task);
	res.render('task', {
		'taskname': task
	});
	res.render('task');
}