// Get all of our user data
var data = require('../data.json');

exports.view = function(req, res){

	//console.log(data);
	data["grid"] = false;
	res.render('submit_new_task', data);

}

exports.view2 = function(req, res){

	//console.log(data);
	data["grid"] = true;
	res.render('submit_new_task', data);

}
