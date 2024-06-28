import { useBusinessData } from "./rendercards.js";
import { businessSpotlight } from "./spotlight.js";
//import { FetchCurrentWeatherReport } from "./weather.js";

//import { FetchWeatherForecastReport } from "./weather.js";
//import { CreateWeatherCards } from "./utity.js";

/* Hamburger Menu*/
const hamburger = document.querySelector("#burger-menu");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

//* Footer */
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
const lastmodified = document.lastModified;

document.getElementById("lastmodified").innerHTML =
  "Last Modification " + Date(lastmodified);

const businesSection = document.getElementById("BusinessesContainer");
const business_cards = document.getElementById("BusinessCards");

// Fetch the JSON data from the server
async function fetchBusiess() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const spotlight = data.slice(0, 3);

    useBusinessData(data, businesSection);
    businessSpotlight(spotlight);
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
}
fetchBusiess();

async function fetchSpotBusiess() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const spotlight = data.slice(0, 3);

    businessSpotlight(spotlight, business_cards);
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
}
fetchSpotBusiess();

/* switch directory display */
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listButton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

/* Weather section and calls 
const lat = 33.92;
const lon = 18.42;
const APIKEY = "72ed033637d24102f0b8d9c2285a5091";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=33.92&lon=18.42&appid=72ed033637d24102f0b8d9c2285a5091`;

async function FetchCurrentWeatherReport(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();

    return JSON.stringify(data);
  } catch (error) {
    console.log(error);
  }
}

const data = await FetchCurrentWeatherReport(weatherUrl);
console.log("data: " + data);
*/

console.log("i am here")