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