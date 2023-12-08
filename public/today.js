
function initClock() {

  // Anropa funktionen för att uppdatera klockan varje sekund
  setInterval(tick, 1000);

  // Initial update to display the current time immediately
  tick()

  // Set up an interval to run the function every 24 hours
  

}

function tick() {
  logCurrentTime();
  renderDate();
  displayCurrentDay();
}



function renderDate() {
  let date = new Date();
  const todaysDate = date.toLocaleDateString("sv-sv");
  let displayDate = document.getElementById("date");
  displayDate.innerHTML = todaysDate;

}

function displayCurrentDay() {
  const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
  const currentDate = new Date();
  const dayOfWeek = days[currentDate.getDay()];

  let todayInfoElement = document.getElementById("day-of-week");
  todayInfoElement.textContent = dayOfWeek;
}

function logCurrentTime() { // update klock gör så att tiden visas direkt
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');


  const klockaElement = document.getElementById('klocka');
  klockaElement.textContent = `${hours}:${minutes}:${seconds}`; //uppdaterar content i html sidan

}