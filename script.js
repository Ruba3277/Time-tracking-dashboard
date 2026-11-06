fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const activities = document.getElementById('activities');

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