// Search city
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("search-btn");


// Main informations
const cityCountry = document.getElementById("cidade-apresentar");
const currentTemp = document.getElementById("temperatura");
const windSpeed = document.getElementById("vento");
const rainChance = document.getElementById("umidade");
const currentWeather = document.getElementById("clima");
const currentIcon = document.getElementById("current-icon");

// Day 1
const day1 = document.getElementById("name-1");
const averageTemp1  = document.getElementById("temp-1");
const icon1 = document.getElementById("icon-1");

// Day 2
const day2 = document.getElementById("name-2");
const averageTemp2 = document.getElementById("temp-2");
const icon2 = document.getElementById("icon-2");

// Day 3
const day3 = document.getElementById("name-3");
const icon3 = document.getElementById("icon-3");
const averageTemp3 = document.getElementById("temp-3");

// Message
const sugestionMessage = document.getElementById("mensagem");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    searchCity(city);
});

async function searchCity(city) {
    
    try {
        const locUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
        const locResponse = await fetch(locUrl);
        const locJson = await locResponse.json();

        if (!locJson.results) {
            console.log("City not found");
            return;
        }

        const {latitude, longitude, name, country} = locJson.results[0];

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherJson = await weatherResponse.json();

        const tempJson = weatherJson.current_weather.temperature;
        const windSpeedJson = weatherJson.current_weather.windspeed;
        const dateJson = weatherJson.current_weather.time;
        const codeJson = weatherJson.current_weather.weathercode;
        const objectDate = new Date(dateJson);
        const options = {weekday: "long", day: "numeric" , month:"long"};
        const rainChanceJson = weatherJson.hourly.precipitation_probability[0];
        const maxTempJson = weatherJson.daily.temperature_2m_max;
        const minTempJson = weatherJson.daily.temperature_2m_min;
        const weekDaysJson = weatherJson.daily.time;
        
        const message = sugestion (tempJson, rainChanceJson, codeJson);
        sugestionMessage.innerText = message;

        const forecastDay0 = translateWeather(weatherJson.daily.weather_code[0]);
        currentIcon.src = forecastDay0.img;

        const forecastDay1 = translateWeather(weatherJson.daily.weather_code[1]);
        icon1.src = forecastDay1.img;
        
        const forecastDay2 = translateWeather(weatherJson.daily.weather_code[2]);
        icon2.src = forecastDay2.img;

        const forecastDay3 = translateWeather(weatherJson.daily.weather_code[3]);
        icon3.src = forecastDay3.img;
        
        const formatedDate = (dateString) => {
            const date = new Date(dateString);
            return date.toLocaleDateString("en", {weekday: "short"}).replace(".", "");
        }

        const someDay1 = maxTempJson[1] + minTempJson[1];
        const mediaDay1 = (someDay1 / 2).toFixed(1);

        const someDay2 = maxTempJson[2] + minTempJson[2];
        const mediaDay2 = (someDay2 / 2).toFixed(1);

        const someDay3 = maxTempJson[3] + minTempJson[3];
        const mediaDay3 = (someDay3 / 2).toFixed(1);

        let formatDate = objectDate.toLocaleDateString('en', options);

        formatDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);

        averageTemp1.innerText = `${mediaDay1}`;
        averageTemp2.innerText = `${mediaDay2}`;
        averageTemp3.innerText = `${mediaDay3}`;

        day1.innerText = formatedDate(weekDaysJson[1]);
        day2.innerText = formatedDate(weekDaysJson[2]);
        day3.innerText = formatedDate(weekDaysJson[3]);

        cityCountry.innerText = `${name}, ${country}`;

        currentTemp.innerText = `${tempJson}°C`;
        windSpeed.innerText = `${windSpeedJson}°Km/h`;
        rainChance.innerText = `${rainChanceJson}%`;
    }
    catch(error) {
        console.log("Error in the search", error)
    }
}

function translateWeather(code) {
    if(code == 0) return{text: "Clean skye", img: "assets/weather-icon/ceu-limpo.png"};
    if(code >= 1 && code <= 3) return{text: "Cloudy", img: "assets/weather-icon/ceu-limpo.png"};
    if(code >= 51 && code <= 67) return{text: "Rain", img: "assets/weather-icon/ceu-limpo.png"};
    if(code >= 71 && code <= 77) return{text: "Show", img: "assets/weather-icon/ceu-limpo.png"};
    if(code >= 80 && code <= 82) return{text: "rain showers", img: "assets/weather-icon/ceu-limpo.png"};
    if(code >= 95) return{text: "storm", img: "assets/weather-icon/ceu-limpo.png"};
}

function sugestion(tempJson, rainChanceJson, codeJson) {

    if(rainChanceJson > 50 || codeJson >= 80) {
        return 'Take an umbrella!';
    }

    else if (tempJson < 15) {
        return 'Ideal for a walk in the park';
    }

    return 'Have a nice day 😊';
}

window.addEventListener('DOMContentLoaded', () => {
    searchCity('Jaraguá do Sul');
});