//call back function
var userSubmit = document.querySelector("#user-submit");
var toDoList = document.querySelector("#to-do-list");

function addToDo(event){
	event.preventDefault();
	//console.log(event);//this was just to check the event function
	var userInput = document.querySelector("#user-input");
	
	if (userInput.value === ''){
		return false;
}
	// toDoList.innerHTML += '<li>' + userInput.value + '</li>';
	toDoList.innerHTML = '<li><i class="fa fa-certificate close-to-do" aria-hidden="true" > </i>' + " " + userInput.value + '</li>' + toDoList.innerHTML ;

	userInput.value ="";
	//console.log(userInput.value);
	//console.log(toDoList);
	//console.log("this works");
}
// function removeToDo(event){
// 	console.log(event);
// }
function removeToDo(event){
	// console.log(event.target.classList.contains('close-to-do'));
	if(event.target.classList.contains('close-to-do')){
		var li = event.target.parentElement; 
		toDoList.removeChild(li);
		console.log(li);

	}
}

toDoList.addEventListener('click',removeToDo, false);
userSubmit.addEventListener("click", addToDo, false);
//                listen for click, addToDo is a function, false (google it)       
