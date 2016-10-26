'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected glsnfl");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function
projectClick(e) {
	// console.log('hello');
	// // // prevent the page from reloading 
	// // console.log("Project clicked");
	// // e.preventDefault();
	// // $(this).css("background-color", "#7fff00");

	// // Cancel the de'fault action, which prevents the page from reloading
	e.preventDefault();

	// // In an event listerner, $(this) is the element that fired the event
	// var projectTitle = $(this).find("p").text();
	// var jumbotronHeader = $(".jumbotron h1");
	// jumbotronHeader.text(projectTitle);

	// var containingProject = $(this).closest(".project");
	// containingProject.append("div class = 'project-description'><p>Description of the project.</p></div>");

	var containingProject = $(this).closest(".project");
	console.log(containingProject)
	var description = $(containingProject).find('.project-description');
	// var description = $("#project‐d");
	console.log(description);
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
		console.log("Appended") 
	} else {
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>"); 
	}
}
