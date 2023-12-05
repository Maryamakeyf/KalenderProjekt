// föklarra funktion för att uppdatera kalendern.
function updateCalendar() {
  //hämtar element för datum o månad/år från HTML-dokumentet.
  const dateElement = document.getElementById("calendar-dates");
  const monthYearElement = document.getElementById("monthYear");

  // ser om elementen finns, avslutar funktionen om de inte finns.
  if (!dateElement || !monthYearElement) {
    return; // Exit function om elements inte hittats
  }

  //Skapar en nytt Date-objekt för att representera nuvarande datum.
  let currentDate = new Date();
  // Genrerar kalendern med nuvarande datum.
  generateCalendar(currentDate, dateElement, monthYearElement);

  // Lägger till för att gå bakåt i kalendern.
  document.getElementById("beforeBtn").addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate, dateElement, monthYearElement);
  });

  // Lägger till för att gå framåt i kalendern.
  document.getElementById("nextBtn").addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate, dateElement, monthYearElement);
  });
}

// Bestämma för en funktion för att generera kalendern.
function generateCalendar(date, dateElement, monthYearElement) {
  // Hämtar nuvarande år och månad från det givna datumet.
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  // Skapar objekt för första och sista dagen i månaden.
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  // Hämtar antalet dagar i månaden och index för första och sista dagen.
  const totalDays = lastDay.getDate();
  /* Justerar så 0 = sön och mån = 1 ist för den amerkanska tänket*/
  let firstDayIndex = firstDay.getDay();
  if (firstDayIndex === 0) {
    firstDayIndex = 6;
  } else {
    firstDayIndex -= 1;
  }
  const lastDayIndex = lastDay.getDay();

  // Omvandlar datumet till en sträng som visar månadens namn och året, och visar sedan denna sträng.
  const monthYearString = date.toLocaleString("sv-se", {
    month: "long",
    year: "numeric",
  });
  monthYearElement.textContent = monthYearString;

  // skapr Html för datumen
  let datesHTML = "";
  //lägger till de inaktiva datumen före den första dagen i månaden
  for (let i = firstDayIndex; i > 0; i--) {
    datesHTML += `<div class="date inactive" data-cy="calendar-cell"><p data-cy="calendar-cell-date"> ${new Date(
      currentYear,
      currentMonth,
      -i + 1
    ).getDate()}</p></div>`;
  }
  // lägger till alla datumen för månaden.
  for (let i = 1; i <= totalDays; i++) {
    const activeClass =
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    datesHTML += `<div class="date ${activeClass}" data-cy="calendar-cell"><p data-cy="calendar-cell-date">${i}</p></div>`;
  }
  //lägger till inaktiva datum efter den sista dagen i månaden
  let remainingDays = 7 - lastDayIndex;
  if (lastDayIndex === 0) {
    remainingDays = 0;
  }

  const daysAfterMonth = remainingDays === 7 ? 0 : remainingDays;

  // Add inactive dates after the end of the month up to the end of the current week
  for (let i = 1; i <= daysAfterMonth; i++) {
    datesHTML += `<div class="date inactive" data-cy="calendar-cell"><p data-cy="calendar-cell-date">${i}</p></div>`;
  }
  // sätter in HTML för datumen i kalenderelementen.
  dateElement.innerHTML = datesHTML;
  leapYear(currentYear);
}
function leapYear(year) {
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    console.log("leap year");
  } else {
    console.log("Not leap year");
  }
}
