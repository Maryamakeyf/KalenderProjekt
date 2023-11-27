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

function initClock() {
  const klockaElement = document.getElementById('klocka');

  function logCurrentTime() { // update klock gör så att tiden visas direkt
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    klockaElement.textContent = `${hours}:${minutes}:${seconds}`; //uppdaterar content i html sidan

    
  }

  // Anropa funktionen för att uppdatera klockan varje sekund
  setInterval(logCurrentTime, 1000);

  // Initial update to display the current time immediately
  logCurrentTime();
}

