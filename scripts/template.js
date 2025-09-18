const town = document.querySelector("#town");
const description = document.querySelector("#description");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");

const url = "//api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=5ae73727814ab3e86c467c8a3bd3ee63"

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


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}`;
    console.log("hello");
    town.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", data.weather[0].description)
}

apiFetch();