  const apiKey = "5bba92dc1ad24434462db7275313f5ee"; // Replace with your API key

  async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultDiv.innerHTML = '';
    errorDiv.textContent = '';

    if (!city) {
      errorDiv.textContent = 'Please enter a city name';
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"5bba92dc1ad24434462db7275313f5ee"}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();

      const weatherHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon" />
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;

      resultDiv.innerHTML = weatherHTML;

    } catch (error) {
      errorDiv.textContent = error.message;
    }
  }