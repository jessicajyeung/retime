// Get all of our user data
var data = require('../data.json');

exports.view = function(req, res) {
	res.render('task', data["users"][0]["assignments"][parseInt(req.query.index)]);
}