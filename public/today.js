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

function displayCurrentDay() {
  const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
  const currentDate = new Date();
  const dayOfWeek = days[currentDate.getDay()];

  let todayInfoElement = document.getElementById("day-of-week");
  let dayElement = document.createElement("p");
  dayElement.textContent = dayOfWeek;

  todayInfoElement.appendChild(dayElement);
}

displayCurrentDay();