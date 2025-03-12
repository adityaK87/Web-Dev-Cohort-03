let todos = [];

function addTodo() {
	const inputEl = document.querySelector("input");
	todos.push({ title: inputEl.value });
	render();
	inputEl.value = "";
}

function deleteTodo(index) {
	todos.splice(index, 1);
	render();
}

const createTodoComponent = (todo, index) => {
	const divEl = document.createElement("div");
	const h1 = document.createElement("h1");
	const buttonEl = document.createElement("button");
	buttonEl.innerHTML = "Delete";
	buttonEl.setAttribute("onclick", "deleteTodo(" + index + ")");
	h1.innerHTML = todo.title;

	divEl.appendChild(h1);
	divEl.appendChild(buttonEl);
	return divEl;
};

function render() {
	document.querySelector("#todos").innerHTML = "";
	for (let i = 0; i < todos.length; i++) {
		const element = createTodoComponent(todos[i], i);
		document.querySelector("#todos").appendChild(element);
	}
}
