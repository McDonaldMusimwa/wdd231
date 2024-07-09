import { useBusinessData } from "./rendercards.js";
import { businessSpotlight } from "./spotlight.js";
import { RenderMembershipLevels } from "./membershiplevels.js";
import { ModalFunctionality } from "./modal.js";
import { joinSubmission } from "./FormSubmission.js";
//import { rendernewUser } from "./thankyou.js";

//import { FetchCurrentWeatherReport } from "./weather.js";

//import { FetchWeatherForecastReport } from "./weather.js";
import {
  RenderCurrentWeatherData,
  RenderWeatherForecast,
  RenderEvents,
} from "./utity.js";

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

    if (data) {
      useBusinessData(data, businesSection);
      businessSpotlight(spotlight);
    }
  } catch (error) {
    //console.error("Error fetching JSON:", error);
  }
}
fetchBusiess();

async function fetchSpotBusiness() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    // const spotlight = data.slice(0,2)
    const spotlight = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].membershiplevel === "Gold") {
        spotlight.push(data[i]);
      }
    }

    businessSpotlight(spotlight.splice(0, 3), business_cards);
  } catch (error) {
    //console.error("Error fetching JSON:", error);
  }
}
fetchSpotBusiness();

/* switch directory display */
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");
const display = document.querySelector("article");

gridButton?.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listButton?.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

/* Weather section and calls */
const lat = 33.92;
const lon = 18.42;
const APIKEY = "72ed033637d24102f0b8d9c2285a5091";
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`;

async function FetchCurrentWeatherReport(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();

    RenderCurrentWeatherData(data.list[0]);

    const threedaysdata = (data) => {
      const hours = 7;
      const selected = [];
      for (let i = 7; i < data.list.length; i += hours) {
        selected.push(data.list[i]);
      }

      return selected.slice(0, 3);
    };

    RenderWeatherForecast(threedaysdata(data));
  } catch (error) {
    console.log(error);
  }
}
FetchCurrentWeatherReport(weatherUrl);

const weatherdata = {
  coord: { lon: 18.42, lat: 33.92 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
  base: "stations",
  main: {
    temp: 25.98,
    feels_like: 25.98,
    temp_min: 25.98,
    temp_max: 25.98,
    pressure: 1014,
    humidity: 69,
    sea_level: 1014,
    grnd_level: 1014,
  },
  visibility: 10000,
  wind: { speed: 2.7, deg: 305, gust: 2.85 },
  clouds: { all: 0 },
  dt: 1719818824,
  sys: { sunrise: 1719805134, sunset: 1719856875 },
  timezone: 3600,
  id: 0,
  name: "",
  cod: 200,
};

/* Evnts */
async function EventsRender() {
  try {
    const response = await fetch("data/eventsdata.json");
    const data = await response.json();

    data.forEach((event) => {
      RenderEvents(event);
    });
  } catch (error) {
    console.log(error);
  }
}
EventsRender();

async function MemberShip() {
  try {
    const response = await fetch("data/membershiplevels.json");
    const data = await response.json();
    RenderMembershipLevels(data);
  } catch (error) {
    console.log(error);
  }
}
ModalFunctionality();
MemberShip();

/* form submission*/

let formdata = document.getElementById("join-form");
if (formdata) {
  formdata.addEventListener("submit", (event) => {
    event.preventDefault();
    joinSubmission();

    
     
    
  });
}
console.log("i am here");
