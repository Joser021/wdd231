const town = document.querySelector("#town");
const description = document.querySelector("#description");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");

const url = "//api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=5ae73727814ab3e86c467c8a3bd3ee63"
const tomorrowurl = `https://api.openweathermap.org/data/2.5/onecall?lat=-2.52&lon=-44.29&exclude=current,minutely,hourly,alerts&units=metric&appid=5ae73727814ab3e86c467c8a3bd3ee63`;

async function apiFetch() {
    try {   
        const response = await fetch(url);
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


apiFetch();