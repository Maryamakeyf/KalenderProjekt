function updateCalendar () {
    const dateElement = document.getElementById('calendar-dates'); 
    const monthYearElement = document.getElementById('monthYear'); 
    
    if (!dateElement || !monthYearElement) {
        return; // Exit the function if elements are not found
      }
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
    const firstDay = new Date(currentYear, currentMonth, 0);
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
  
 