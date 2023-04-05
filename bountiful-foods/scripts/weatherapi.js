// select HTML elements in the document
const currentTemp = document.getElementById("temperature");
const weatherText = document.getElementById("weather-text");
const weatherIcon = document.getElementById('weather-icon');
const humidity = document.getElementById("humidity");
const apiKey = '719dfa891fd073b35614ca92bef10365'
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?id=3173435&appid=${apiKey}&units=metric`
const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?id=3173435&appid=${apiKey}&units=metric`

function displayForecastWeatherResults(weatherData) {
    const forecast = weatherData.list.filter(item => item.dt_txt.includes('12:00'));

    const forecastList = document.getElementById("forecast");

    forecastList.innerHTML = '';

    forecast.shift();

    for (let i = 0; i < 3; i++) {
        const date = new Date(forecast[i].dt_txt);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const iconsrc = `https://openweathermap.org/img/w/${forecast[i].weather[0].icon}.png`;
        const desc = forecast[i].weather[0].description;

        forecastList.innerHTML += `
            <span class="day">${day}</span>
            <div class="flex">
                <img src="${iconsrc}" alt="${desc}">
                <span class="temp"><strong>${forecast[i].main.temp.toFixed(0)}°C</strong></span>
            </div>
        `;
    }
}

function displayCurrentWeatherResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}°C</strong>`;
    const desc = weatherData.weather[0].description;
    humidity.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0) * 3.6}%</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherText.innerHTML = desc.charAt(0).toUpperCase() + desc.slice(1);
}

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(currentWeatherURL).then(data => displayCurrentWeatherResults(data));
apiFetch(forecastWeatherURL).then(data => displayForecastWeatherResults(data));