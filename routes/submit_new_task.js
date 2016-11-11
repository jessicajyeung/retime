// Get all of our user data
var data = require('../data.json');

exports.view = function(req, res){

//! 1. open ../data.json
var database = require('../data.json');
console.log(database);


//! 2. add the new task to the database
console.log(req.query);//print the form 
{{#with users.[0]}}
				{{#each assignments}}
database["users"][0]["assignments"].push ….
database.push({ 'taskName: req.query.task_name, 'dueDate':req…. , 'timeDue': ... });


//! 3. save the database
i fucking dont know the code
how to open a file?
how to write into a file
open => ../data.json
write into that file "database" variable



	//console.log(data);
	res.render('submit_new_task', data);
}
