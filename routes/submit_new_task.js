// Get all of our user data
var data = require('../data.json');

exports.view = function(req, res){

//! 1. open ../data.json
var database = require('../data.json');



//! 2. add the new task to the database


var subtasks=[];
for (i=0;i<req.query.subtask.length;i+=1)
subtasks.push({'smalltask':req.query.subtask[i]});

database["users"][0]["assignments"].push({'task': req.query.taskname, 'due_date': req.query.due_date, 
	'subtasks': subtasks});

console.log(req.query);//print the form 

	//console.log(data);
	res.render('submit_new_task', database);

// console.log(req.query);//print the form 
// {{#with users.[0]}}
// 				{{#each assignments}}
// database["users"][0]["assignments"].push ….
// database.push({ 'taskName: req.query.task_name, 'dueDate':req…. , 'timeDue': ... });


//! 3. save the database
// i fucking dont know the code
// how to open a file?
// how to write into a file
// open => ../data.json
// write into that file "database" variable



	console.log(data);
	res.render('submit_new_task', data);

}
