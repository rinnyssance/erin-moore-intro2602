const button = document.getElementById("getWeather");

button.addEventListener("click", () => {

    document.getElementById("temperature").textContent = "Loading...";
    document.getElementById("windspeed").textContent = "Loading...";

    fetch("https://api.open-meteo.com/v1/forecast?latitude=36.85&longitude=-76.29&current=temperature_2m,wind_speed_10m")
        .then((response) => response.json())
        .then((data) => {

            const temperature = data.current.temperature_2m;
            const windSpeed = data.current.wind_speed_10m;

            document.getElementById("temperature").textContent = `${temperature}°C`;
            document.getElementById("windspeed").textContent = `${windSpeed} km/h`;

        })
        .catch((error) => {

            console.error("Error fetching weather data:", error);

            document.getElementById("temperature").textContent = "Unable to load";
            document.getElementById("windspeed").textContent = "Unable to load";
        });
});


const sunriseButton = document.getElementById("getSunrise");

sunriseButton.addEventListener("click", () => {

    document.getElementById("sunrise").textContent = "Loading...";
    document.getElementById("sunset").textContent = "Loading...";

    fetch("https://api.open-meteo.com/v1/forecast?latitude=36.85&longitude=-76.29&daily=sunrise,sunset&timezone=America%2FNew_York")
        .then((response) => response.json())
        .then((data) => {

            const sunrise = data.daily.sunrise[0];
            const sunset = data.daily.sunset[0];

            document.getElementById("sunrise").textContent = sunrise;
            document.getElementById("sunset").textContent = sunset;

        })
        .catch((error) => {

            console.error("Error fetching sunrise and sunset data:", error);

            document.getElementById("sunrise").textContent = "Unable to load";
            document.getElementById("sunset").textContent = "Unable to load";
        });
});