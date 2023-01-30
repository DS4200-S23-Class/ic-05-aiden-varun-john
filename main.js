// create counting variable
let count = 0;

// button function
function buttonClicked() {
	console.log("button was clicked");

	//  Track the amount of times button was clicked
	count += 1; 
	let newText = "Number of times button clicked: " + count;

	// select the element
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;
}
