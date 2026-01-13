const apiKey = "8f460554e07d9d3a294a89fa48258a9a";
const apiBase = "https://api.openweathermap.org/data/2.5/";

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector("#cityInput");

const cityName = document.querySelector("#cityName");
const dateTime = document.querySelector("#dateTime");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const weatherIcon = document.querySelector("#weatherIcon");

const feelsLike = document.querySelector("#feelsLike");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

function getWeatherIcon(main) {
    switch (main.toLowerCase()) {
        case "clouds": return "fa-cloud";
        case "clear": return "fa-sun";
        case "rain": return "fa-cloud-rain";
        case "snow": return "fa-snowflake";
        case "thunderstorm": return "fa-bolt";
        default: return "fa-cloud-sun";
    }
}

function updateDate() {
    const now = new Date();
    dateTime.textContent =
        `${now.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long"
        })} | ${now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        })}`;
}

async function checkWeather(city) {
    if (!city) return;

    try {
        const res = await fetch(
            `${apiBase}weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!res.ok) throw new Error("City not found");

        const data = await res.json();

        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°`;
        description.textContent = data.weather[0].description;

        weatherIcon.className =
            `fa-solid ${getWeatherIcon(data.weather[0].main)} weather-icon`;

        feelsLike.innerHTML =
            `<i class="fa-solid fa-temperature-half"></i> Feels like ${Math.round(data.main.feels_like)}°`;

        humidity.innerHTML =
            `<i class="fa-solid fa-droplet"></i> Humidity ${data.main.humidity}%`;

        wind.innerHTML =
            `<i class="fa-solid fa-wind"></i> Wind ${Math.round(data.wind.speed * 3.6)} km/h`;

        updateDate();

    } catch (error) {
        cityName.textContent = "City not found";
        temperature.textContent = "--°";
        description.textContent = "";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        checkWeather(searchInput.value);
    }
});

// Default city
checkWeather("Delhi");
