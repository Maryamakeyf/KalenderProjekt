/* Hämtar DOM element*/
const todoContainer = document.getElementById("todo-list");
const inputTodo = document.getElementById("todo-title-input");
const inputDate = document.getElementById("date-todo");
const todoBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("display-todo");
const orderdListElement = document.querySelector("ol");

//initiera en array där todos och datum ska sparas
let arrayOfTodos = [];

/*ska nog byta namn men den innehåller vad som händer när man lägger till todos*/
function initTodolist() {
  todoBtn.onclick = addTodo;
  renderTodoList();
}

function addTodo() {
  /*tar in värdet i inputfältet och datum fältet*/
  let todo = inputTodo.value;
  let todoDate = inputDate.value;
  /* om inputfältet inte är tomt och datumfältet inte är tomt*/
  if (todo !== "" && todoDate !== "") {
    /*spara todon och datumet i arrayen som ett object*/
    arrayOfTodos.push({ text: todo, date: todoDate });
    //tömmer value fälten/återställer
    saveTodosToLocalStorage();
    inputTodo.value = "";
    inputDate.value = "";
    renderTodoList();
    renderCalendar();
    /*Om vi har en todo men man inte valt i datum ska den ta dagens datum som default*/
  } else if (todo !== "" && todoDate === "") {
    //hämtar dagens datum
    let date = new Date();
    //omvandlar till vår lokala datum utseende
    const todaysDate = date.toLocaleDateString("sv-sv");
    arrayOfTodos.push({ text: todo, date: todaysDate });
    //tömmer value fältet
    saveTodosToLocalStorage();
    inputTodo.value = "";
    inputDate.value = "";
    renderTodoList();
    renderCalendar();
    //man kan trycka på knapp utan att ngt händer
  } else {
    return;
  }
  //hämtar todo och renderar todolistan
  renderTodoList();
}

function renderTodoList(dateStringToFilterBy) {
  //tömmer det gamla visade listan så det inte blir kaka på kaka
  orderdListElement.innerHTML = "";
  let filteredTodos = [];
  if (dateStringToFilterBy) {
    filteredTodos = arrayOfTodos.filter(
      (todo) => todo.date === dateStringToFilterBy
    );
  } else {
    filteredTodos = arrayOfTodos;
  }
  //loopar igenom varje todo sparad i arrayen
  for (let aTodo of filteredTodos) {
    /*skapar ett li för varje todo i lopen*/
    const liElement = document.createElement("li");
    //sätter texten och datumet till li och skriver ut på skärm
    liElement.textContent = aTodo.text + "-" + aTodo.date;
    orderdListElement.appendChild(liElement);
    //skapar span element
    const spanElementDelete = document.createElement("span");
    //lägger till en class som är en symbol hämtad från google icons
    spanElementDelete.classList.add("material-symbols-outlined");
    //säger till google vilken ikon det här, här delete.
    spanElementDelete.innerHTML = "delete";
    //sätter dit ett data cy attribut och appendar till DOM
    spanElementDelete.setAttribute("data-cy", "delete-todo-button");
    liElement.appendChild(spanElementDelete);
    todoList.style.display = "block";
    /* när du klickar på delete ikon kommer oncklick funktionen ta in vilket index som den valda todon har i arrayen och skicka med den till funktionen remove todo*/
    spanElementDelete.onclick = function () {
      const indexofTodo = arrayOfTodos.indexOf(aTodo); //här hämtar den indexen för den todon man är på.
      removeTodo(indexofTodo, dateStringToFilterBy);
    };
    /*denna kod gör samma sak som den övre fast med edit ikonen */
    const spanElementEdit = document.createElement("span");
    spanElementEdit.classList.add("material-symbols-outlined");
    spanElementEdit.innerHTML = "edit";
    spanElementEdit.setAttribute("data-cy", "edit-todo-button");
    liElement.appendChild(spanElementEdit);
    spanElementEdit.onclick = function () {
      const indexofTodo = arrayOfTodos.indexOf(aTodo);
      editTodo(indexofTodo, dateStringToFilterBy);
    };
  }
}
//index är indexoftodo
function removeTodo(index, dateStringToFilterBy) {
  arrayOfTodos.splice(
    index,
    1
  ); /*vid det valda indexet tar den bort en sak, asså den valda todon i arrayen*/
  todoList.style.display = "none";
  saveTodosToLocalStorage();
  renderTodoList(dateStringToFilterBy);
  renderCalendar();
}

//index är indexoftodo
function editTodo(index, dateStringToFilterBy) {
  /*sätter värdet i inpuputfält och datumfältet till det värdet som finns vid valt index (.) är att den går in i varje objekt del*/
  inputTodo.value = arrayOfTodos[index].text;
  inputDate.value = arrayOfTodos[index].date;
  /* När man trycker på redigera */
  todoBtn.onclick = function () {
    /* tar den in de nya värderna man valt och sparar i nya varibler */
    const editedTodo = inputTodo.value;
    const editedDate = inputDate.value;
    /*om både edittodo och editdate har ett värden kommer nya värdena som är sparade i de nya variablerna och sättas till arrayen vid det aktuella indexet*/
    if (editedTodo !== "" && editedDate !== "") {
      arrayOfTodos[index] = { text: editedTodo, date: editedDate };
      saveTodosToLocalStorage();
      inputTodo.value = "";
      inputDate.value = "";

      renderTodoList(dateStringToFilterBy);
      renderCalendar();
      /*om man inte gör ngt ändrar den bara knapparna och visar todolistan*/
    }
    /*du kan välja på redigera att bara ändra ett av värdena har testat och den ändrar bara det nya då utan problem*/
  };
}
//function för att spara till localstorage
function saveTodosToLocalStorage() {
  // sätter todos i localstorage med strängar av arrayen todo
  localStorage.setItem("todos", JSON.stringify(arrayOfTodos));
}
//function för att hämta todos from localstorage
function loadTodoFromLocalStorage() {
  const storedTodos = localStorage.getItem("todos");
  // if sats för att kolla om todos är sparad
  if (storedTodos) {
    arrayOfTodos = JSON.parse(storedTodos);
  }
}
