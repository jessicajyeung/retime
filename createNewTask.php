<!DOCTYPE html public>
<html>
<head>
	<title>Re:Time</title>	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-theme.min.css" rel="stylesheet">
	<link href="css/introHCI.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
</head>

<body>
	<?php include("includes/header.html");?>
	<?php include("includes/menu.html");?>

	<div class="container">
		<h3>Create New Task</h3>
		<form>
			<div><label for="taskname">Task Name </label><input type="text" name="taskname" id="taskname">
			</div>

			<div><label for="duedate">Due Date </label><input type="date" name="duedate">
			</div>
			<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>

			<script>   
			$(function() {
				$( "#calendar" ).datepicker();   
			}); 
			</script>

			<p>Calendar: <input type="text" id="calendar" /></p>

			<div><label for="timedue">Time Due </label><input type="time" name="timedue">
			</div>
			<br>

			<button type="submit" value="Submit">Create</button>
			<button type="reset" value="Reset">Reset</button>
			<a href="index.php"> Cancel </a>
		</div>
	</form>
	<script src="https://code.jquery.com/jquery.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/introHCI.js"></script>
	<script src="js/main.js"></script>
</body>
</html>
