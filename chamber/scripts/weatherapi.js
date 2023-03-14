// select HTML elements in the document
const currentTemp = document.getElementById("temperature");
const weatherText = document.getElementById("weather-text");
const weatherIcon = document.getElementById('weather-icon');
const windspeed = document.getElementById("windspeed");
const apiKey = '719dfa891fd073b35614ca92bef10365'
const url = `https://api.openweathermap.org/data/2.5/weather?id=3173435&appid=${apiKey}&units=metric`

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windspeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0) * 3.6}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherText.innerHTML = desc.charAt(0).toUpperCase() + desc.slice(1);;
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();