const todoContainer = document.getElementById("todo-list");
const inputTodo = document.getElementById("todo-title-input");
const todoBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("display-todo");
const orderdListElement = document.querySelector("ol");
const editBtn = document.getElementById("edit-btn");
editBtn.style.display = "none";

let arrayOfTodos = [];

function initTodolist() {
  todoBtn.onclick = function () {
    let todo = inputTodo.value;
    if (todo !== "") {
      arrayOfTodos.push(todo);
      //tömmer value fältet
      inputTodo.value = "";
    } else {
      return;
    }
    renderTodoList();
  };
}
function renderTodoList() {
  orderdListElement.innerHTML = "";

  for (let aTodo of arrayOfTodos) {
    const liElement = document.createElement("li");
    liElement.textContent = aTodo;
    orderdListElement.appendChild(liElement);
    const spanElementDelete = document.createElement("span");
    spanElementDelete.classList.add("material-symbols-outlined");
    spanElementDelete.innerHTML = "delete";
    spanElementDelete.setAttribute("data-cy", "delete-todo-button");
    liElement.appendChild(spanElementDelete);
    spanElementDelete.onclick = function () {
      const indexofTodo = arrayOfTodos.indexOf(aTodo);
      removeTodo(indexofTodo);
    };
    const spanElementEdit = document.createElement("span");
    spanElementEdit.classList.add("material-symbols-outlined");
    spanElementEdit.innerHTML = "edit";
    spanElementEdit.setAttribute("data-cy", "edit-todo-button");
    liElement.appendChild(spanElementEdit);
    spanElementEdit.onclick = function () {
      const indexofTodo = arrayOfTodos.indexOf(aTodo);
      editTodo(indexofTodo);
    };
  }
}

function removeTodo(index) {
  arrayOfTodos.splice(index, 1);
  renderTodoList();
}

function editTodo(index) {
  inputTodo.value = arrayOfTodos[index];
  editBtn.style.display = "inline";
  todoBtn.style.display = "none";
  editBtn.onclick = function () {
    const editedTodo = inputTodo.value;
    if (editedTodo !== "") {
      arrayOfTodos[index] = editedTodo;
      inputTodo.value = "";
      editBtn.style.display = "none";
      todoBtn.style.display = "inline";
      renderTodoList();
    } else {
      editBtn.style.display = "none";
      todoBtn.style.display = "inline";
      renderTodoList();
    }
  };
}
