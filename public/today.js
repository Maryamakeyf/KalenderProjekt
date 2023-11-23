function renderDate() {
  let date = new Date();
  const todaysDate = date.toLocaleDateString("sv-sv");
  let displayDate = document.getElementById("today-content");
  let dateElement = document.createElement("div");
  let dateText = document.createElement("h3");
  dateText.innerHTML = todaysDate;
  dateElement.appendChild(dateText);
  displayDate.appendChild(dateElement);
}
