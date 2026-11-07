
let activitiesData = [];
const activities = document.getElementById('activities');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    activitiesData = data;
    
    activities.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('div');

      card.classList.add('activity-card');

      card.innerHTML = `
        <div class="activity-content">
          <div class="activity-header">
            <h2>${item.title}</h2>
            <button type="button">...</button>
          </div>

          <div class="activity-time">
            <h3 class="current-hours">
              ${item.timeframes.weekly.current}hrs
            </h3>
            <p class="previous-hours">
              Last Week - ${item.timeframes.weekly.previous}hrs
            </p>
          </div>
        </div>
      `;

      activities.appendChild(card);
    });
  });
  const daily = document.getElementById('daily');

  daily.addEventListener('click', () => {
    const currentHours = document.querySelectorAll('.current-hours');
    const previousHours = document.querySelectorAll('.previous-hours');
    activitiesData.forEach((item, index) =>{
      currentHours[index].textContent = item.timeframes.daily.current + 'hrs';
      previousHours[index].textContent = `Last Week - ${item.timeframes.daily.previous}hrs`;
    });
    
 });

 const weekly = document.getElementById('weekly');

  weekly.addEventListener('click', () => {
    const currentHours = document.querySelectorAll('.current-hours');
    const previousHours = document.querySelectorAll('.previous-hours');
    activitiesData.forEach((item, index) =>{
      currentHours[index].textContent = item.timeframes.weekly.current + 'hrs';
      previousHours[index].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
    });
    
 });
 const monthly = document.getElementById('monthly');

  monthly.addEventListener('click', () => {
    const currentHours = document.querySelectorAll('.current-hours');
    const previousHours = document.querySelectorAll('.previous-hours');
    activitiesData.forEach((item, index) =>{
      currentHours[index].textContent = item.timeframes.monthly.current + 'hrs';
      previousHours[index].textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`;
    });
    
 });