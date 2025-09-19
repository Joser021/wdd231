const weatherIcon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");
const temp2 = document.querySelector(".temp2");
const description = document.querySelector("#description");
const higherTemp = document.querySelector("#higher");
const lowerTemp = document.querySelector("#lower");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const weatherurl = "//api.openweathermap.org/data/2.5/weather?lat=-2.53&lon=-44.29&units=imperial&appid=5ae73727814ab3e86c467c8a3bd3ee63"

async function apiFetch() {
    try {   
        const response = await fetch(weatherurl);
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
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", data.weather[0].description)
    temp.innerHTML = `${data.main.temp}&deg;F`;
    temp2.innerHTML = `${data.main.temp}&deg;F`;
    description.innerHTML = data.weather[0].description;
    higherTemp.innerHTML = `${data.main.temp_max}&deg;F`;
    lowerTemp.innerHTML = `${data.main.temp_min}&deg;F`;
    humidity.innerHTML = data.main.humidity;

    const sunriseSec = data.sys.sunrise;
    const sunriseDate = new Date(sunriseSec * 1000);
    const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    sunrise.innerHTML = sunriseTime

    const sunsetSec = data.sys.sunset;
    const sunsetDate = new Date(sunsetSec * 1000);
    const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    sunset.innerHTML = sunsetTime
}

apiFetch();