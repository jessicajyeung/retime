// Get all of our user data
var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
	res.render('submit_new_task', data);
}
