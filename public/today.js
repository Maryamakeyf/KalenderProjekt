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

function updateCalendar() {
  const dateElement = document.getElementById('calendar-dates'); // Ange korrekt ID för kalenderdatum
  const monthYearElement = document.getElementById('monthYear'); // Ange korrekt ID för månads- och årstext
  let currentDate = new Date();
  generateCalendar(currentDate, dateElement, monthYearElement);

  document.getElementById('beforeBtn').addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate, dateElement, monthYearElement);
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate, dateElement, monthYearElement);
  });
}

function generateCalendar(date, dateElement, monthYearElement) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();

  const monthYearString = date.toLocaleString('sv-se', { month: 'long', year: 'numeric' });
  monthYearElement.textContent = monthYearString;

  let datesHTML = '';

  for (let i = firstDayIndex; i > 0; i--) {
    datesHTML += `<div class="date inactive">${new Date(currentYear, currentMonth, -i + 1).getDate()}</div>`;
  }

  for (let i = 1; i <= totalDays; i++) {
    const activeClass = i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? 'active' : '';
    datesHTML += `<div class="date ${activeClass}">${i}</div>`;
  }

  for (let i = 1; i <= 6 - lastDayIndex; i++) {
    datesHTML += `<div class="date inactive">${i}</div>`;
  }

  dateElement.innerHTML = datesHTML;
}

updateCalendar();