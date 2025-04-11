const curentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const todayUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=15.62&lon=119.93&units=metric&appid=f31d9ebef780916b09ae9c50219af319';

async function apiFetch() {
    try {
      const response = await fetch(todayUrl);
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
  
    } catch (error) {
        console.log(error);
        }

  };

  function displayResults(data) {
    curentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    };

    apiFetch();