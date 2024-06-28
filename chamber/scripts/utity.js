
function CreateWeatherCards ( weather){
    const currentWeather = document.getElementById("currentWeather")

    const header = document.createElement("h3").innerHTML="Today`s Current Weather";
    const city = document.createElement("p").innerHTML="Capetown"
    const description = document.createElement("span").innerHTML = weather.description;
    const icon = document.createElement("img");
    icon.src=weather.icon;
    icon.alt = weather.main

    

  currentWeather.appendChild(header);
  currentWeather.appendChild(city);
  currentWeather.appendChild(description);
  currentWeather.appendChild(icon);

}

export {CreateWeatherCards}