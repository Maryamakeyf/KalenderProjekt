window.addEventListener("DOMContentLoaded", main);

function main() {
  loadTodoFromLocalStorage();
  
  initClock();
  initTodolist();
  initCalendar();
}
