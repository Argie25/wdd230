const lat = 15.62;
const lon = 119.93;
const apiKey = "f31d9ebef780916b09ae9c50219af319";

const todayContainer = document.getElementById("today");
const forecastContainer = document.getElementById("forecast");

async function fetchTodayWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const data = await response.json();

    const temp = data.main.temp.toFixed(1);
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;
    const city = data.name;

    todayContainer.innerHTML = `
      <div class="weather-card">
        <h3>${city}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
        <p>${desc}</p>
        <p><strong>${temp} °C</strong></p>
      </div>
    `;
  } catch (err) {
    console.error("Error fetching current weather:", err);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    const forecastList = data.list;

    const daysMap = {};

    forecastList.forEach(entry => {
      const date = entry.dt_txt.split(" ")[0];
      if (!daysMap[date]) {
        daysMap[date] = [];
      }
      daysMap[date].push(entry);
    });

    const today = new Date().toISOString().split("T")[0];
    const next3Days = Object.keys(daysMap).filter(date => date !== today).slice(0, 3);

    next3Days.forEach(date => {
      const forecasts = daysMap[date];
      const midday = forecasts.find(item => item.dt_txt.includes("12:00:00")) || forecasts[0];

      const temp = midday.main.temp.toFixed(1);
      const desc = midday.weather[0].description;
      const icon = midday.weather[0].icon;

      forecastContainer.innerHTML += `
        <div class="weather-card">
          <h3>${new Date(date).toDateString()}</h3>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
          <p>${desc}</p>
          <p><strong>${temp} °C</strong></p>
        </div>
      `;
    });
  } catch (err) {
    console.error("Error fetching forecast:", err);
  }
}

// Run both async functions
fetchTodayWeather();
fetchForecast();
