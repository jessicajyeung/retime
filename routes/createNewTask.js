// Get all of our user data
//var newTaskData = require('../newTaskData.json');

exports.view = function(req, res){
	//console.log(newTaskData);
	res.render('createNewTask');
};