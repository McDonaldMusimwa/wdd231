function CreateCurrentWeatherCard(weather, temp) {
  const currentWeather = document.getElementById("currentWeather");



  const city = document.createElement("p");

  city.innerHTML = "<strong>Capetown</strong>";

  const temperature = document.createElement("p");

  temperature.innerHTML = `${temp} °C`; //`Temperature: ${temp.temp}K (feels like ${temp.feels_like}K)` : 'Temperature data not available';

  const description = document.createElement("p");
  description.innerHTML = weather.description;

  const icon = document.createElement("img");
  const src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  icon.setAttribute('src',src); 
  icon.loading = "lazy";
  icon.alt = weather.main;


  currentWeather.appendChild(city);
  currentWeather.appendChild(description);
  currentWeather.appendChild(icon);

  currentWeather.appendChild(temperature);
}

function RenderWeatherForecast(forecastList) {
  const forecastContainer = document.getElementById("weatherfocust");

  forecastList.forEach((weatherData) => {
    const weather = weatherData.weather[0];
    const temp = weatherData.main.temp;

    const div = document.createElement("span");
    div.className = "forecast-item";

    const city = document.createElement("p")
    city.innerHTML = "Capetown"
    const date = new Date(weatherData.dt_txt);
    const dateElement = document.createElement("p");
    dateElement.innerHTML = date.toDateString();

    const temperature = document.createElement("p");
    temperature.innerHTML = `${weatherData.main.temp} °C`;

    const description = document.createElement("p");
    description.innerHTML = weatherData.weather[0].description;

    const icon = document.createElement("img");
    icon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    icon.className="weatherimage"
    icon.loading = "lazy";
    icon.height="100";
    icon.width="100";
    icon.alt = weatherData.weather[0].main;

    div.appendChild(city)
    div.appendChild(dateElement);
    div.appendChild(description);
    div.appendChild(icon);

    div.appendChild(temperature);
    forecastContainer.appendChild(div);
  });
}

function RenderEvents(event) {
  const container = document.getElementById("Events");
  const div = document.createElement("div");
  div.classList.add("event");
  const title = document.createElement("h4");
  title.innerHTML = event.title;
  const venue = document.createElement("p");
  venue.innerHTML = `Venue: ${event.venue}`;
  const description = document.createElement("p");
  description.innerHTML = event.description;
  const date = document.createElement("p");
  date.innerHTML = `Date: ${event.date}`;
  const time = document.createElement("p");
  time.innerHTML = `Time: ${event.time}`;

  div.appendChild(title);
  div.appendChild(venue);
  div.appendChild(description);
  div.appendChild(date);
  div.appendChild(time);

  container.appendChild(div);
}
function RenderCurrentWeatherData(weatherList) {
  const Currentweather = weatherList.weather[0]; // Extract weather info
  const Currenttemp = weatherList.main.temp; // Extract temperature
  CreateCurrentWeatherCard(Currentweather, Currenttemp);
  //CreateForcustWeatherCard(weather, temp);
}
export { RenderCurrentWeatherData, RenderWeatherForecast, RenderEvents };
