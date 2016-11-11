// Get all of our user data
//var data = require('../data.json');

exports.view = function(req, res){

//! 1. open ../data.json
var database = require('../data.json');
console.log(database);


//! 2. add the new task to the database
console.log(req.query);//print the form 

//database.users.push()
newTask = {'task': req.query.taskname, 'due_date': req.query.calendar};
database["users"][0]["assignments"].push({'task': req.query.taskname, 'due_date': req.query.calendar});
//database.push({ 'taskName': task, 'dueDate': due_date});
console.log({'task': req.query.taskname, 'due_date': req.query.calendar});


//! 3. save the database
//i fucking dont know the code
//how to open a file?
//how to write into a file
//open => ../data.json
//write into that file "database" variable



	//console.log(data);
	res.render('submit_new_task', database);
}
