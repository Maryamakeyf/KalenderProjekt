
function initClock() {


  // Anropa funktionen för att uppdatera klockan varje sekund
  setInterval(tick, 1000);

  // Initial update to display the current time immediately
  tick()
}

function tick() {
  logCurrentTime();
}



/*function tickTock() {
  setInterval (tick, 24 * 60 * 60 * 1000)
  renderDate();
  displayCurrentDay();
}*/


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

function logCurrentTime() { // update klock gör så att tiden visas direkt
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');


  const klockaElement = document.getElementById('klocka');
  klockaElement.textContent = `${hours}:${minutes}:${seconds}`; //uppdaterar content i html sidan

}

































/*let lastDisplayedDate = "";
let lastDisplayedDayOfWeek = "";

function initClock() {


  // Anropa funktionen för att uppdatera klockan varje sekund
  setInterval(tick, 1000);

  // Initial update to display the current time immediately
  tick()
}

function tick() {
  logCurrentTime();
  renderDate();
  displayCurrentDay();
}

 
function renderDate() {
  let date = new Date();
  const todaysDate = date.toLocaleDateString("sv-sv");

  // If sats för att kolla om datum har ändrats
  if (todaysDate !== lastDisplayedDate) {
    lastDisplayedDate = todaysDate;
  
  let displayDate = document.getElementById("today-content");
  displayDate.innerHTML = ""; //tar bort det som finns
  let dateElement = document.createElement("div");
  let dateText = document.createElement("h3");
  dateText.innerHTML = todaysDate;
  dateElement.appendChild(dateText);
  displayDate.appendChild(dateElement);
  
}
}

function displayCurrentDay() {
  const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
  const currentDate = new Date();
  const dayOfWeek = days[currentDate.getDay()];

  // if sats för att kolla om dayOfWeek har ändrats
  if (dayOfWeek !== lastDisplayedDayOfWeek) {
    lastDisplayedDayOfWeek = dayOfWeek;
  
  let todayInfoElement = document.getElementById("day-of-week");
  todayInfoElement.innerHTML = ""; // clears existing content
  let dayElement = document.createElement("p");
  dayElement.textContent = dayOfWeek;

  todayInfoElement.appendChild(dayElement);
  
}
}

function logCurrentTime() { // update klock gör så att tiden visas direkt
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');


  const klockaElement = document.getElementById('klocka');
  klockaElement.textContent = `${hours}:${minutes}:${seconds}`; //uppdaterar content i html sidan

  
}
*/