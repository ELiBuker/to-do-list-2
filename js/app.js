//call back function
var userSubmit = document.querySelector("#user-submit");

function addToDo(event){
	event.preventDefault();
	//console.log(event);//this was just to check the event function
	var userInput = document.querySelector("#user-input");
	var toDoList = document.querySelector("#to-do-list");
	if (userInput.value === ''){
		return false;
}
	// toDoList.innerHTML += '<li>' + userInput.value + '</li>';
	toDoList.innerHTML = '<li>' + userInput.value + '</li>' + toDoList.innerHTML ;

	userInput.value ="";
	//console.log(userInput.value);
	//console.log(toDoList);
	//console.log("this works");
}

userSubmit.addEventListener("click", addToDo, false);
//                listen for click, addToDo is a function, false (google it)       
