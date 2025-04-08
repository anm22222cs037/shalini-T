async function getWeather() {
    const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API key
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weather").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("weather").innerHTML = `<p>City not found</p>`;
        }
    } catch (error) {
        document.getElementById("weather").innerHTML = `<p>Error fetching data</p>`;
    }
}
