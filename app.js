/*1.) Your goal for questions 4 and 5 is this: make a simple html file and a simple 
javascript file. The html file should have the html and body tags,plus a button and
 one other div or p tag (basically, somewhere you can put a string of text). Your javascript
 file should use jQuery to display a random string in that div/p when you click the button. 
2.) The contents of your html file get copied and pasted into question 4. The contents of your
 JavaScript file go in question 5. 
3.) Tip: make sure you use the jQuery function that waits until the DOM is loaded. 
It should wrap all of your code. (This is the document ready function - check out slides 38 and 39.)*/

$(function() {

	$("button").click(function() {
	
		var greetings = ["hello", "hi", "howdy ya'll", "wats up"];
		greetings = greetings[Math.floor(Math.random()*greetings.length)];
		$("p").html(greetings);

});

});


