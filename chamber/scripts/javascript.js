import { useBusinessData as e } from "./rendercards.js"; import { businessSpotlight as t } from "./spotlight.js"; import { RenderMembershipLevels as s } from "./membershiplevels.js"; import { ModalFunctionality as a } from "./modal.js"; import { joinSubmission as i } from "./FormSubmission.js"; import { RenderCurrentWeatherData as r, RenderWeatherForecast as n, RenderEvents as l } from "./utity.js"; import { imgObserver as o } from "./discover.js"; import { displayVisitorMessage as d } from "./visitweb.js"; let hamburger = document.querySelector("#burger-menu"), navMenu = document.querySelector(".nav_menu"); hamburger.addEventListener("click", () => { hamburger.classList.toggle("active"), navMenu.classList.toggle("active") }), document.querySelectorAll(".nav_link").forEach(e => { e.addEventListener("click", () => { hamburger.classList.remove("active"), navMenu.classList.remove("active") }) }), document.getElementById("currentyear").innerHTML = new Date().getFullYear(); let lastmodified = document.lastModified; document.getElementById("lastmodified").innerHTML = "Last Modification " + Date(lastmodified); let businesSection = document.getElementById("BusinessesContainer"), business_cards = document.getElementById("BusinessCards"); async function fetchBusiess() { try { let s = await fetch("data/members.json"), a = await s.json(), i = a.slice(0, 3); a && (e(a, businesSection), t(i)) } catch (r) { } } async function fetchSpotBusiness() { try { let e = await fetch("data/members.json"), s = await e.json(), a = []; for (let i = 0; i < s.length; i++)"Gold" === s[i].membershiplevel && a.push(s[i]); t(a.splice(0, 3), business_cards) } catch (r) { } } fetchBusiess(), fetchSpotBusiness(); let gridButton = document.getElementById("grid"), listButton = document.getElementById("list"), display = document.querySelector("article"); gridButton?.addEventListener("click", () => { display.classList.add("grid"), display.classList.remove("list") }), listButton?.addEventListener("click", () => { display.classList.add("list"), display.classList.remove("grid") }); let lat = 33.92, lon = 18.42, APIKEY = "72ed033637d24102f0b8d9c2285a5091", weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.92&lon=18.42&units=metric&appid=72ed033637d24102f0b8d9c2285a5091"; async function FetchCurrentWeatherReport(e) { try { let t = await fetch(e), s = await t.json(); r(s.list[0]), n((e => { let t = []; for (let s = 7; s < e.list.length; s += 7)t.push(e.list[s]); return t.slice(0, 3) })(s)) } catch (a) { console.log(a) } } FetchCurrentWeatherReport("https://api.openweathermap.org/data/2.5/forecast?lat=33.92&lon=18.42&units=metric&appid=72ed033637d24102f0b8d9c2285a5091"); let weatherdata = { coord: { lon: 18.42, lat: 33.92 }, weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }], base: "stations", main: { temp: 25.98, feels_like: 25.98, temp_min: 25.98, temp_max: 25.98, pressure: 1014, humidity: 69, sea_level: 1014, grnd_level: 1014 }, visibility: 1e4, wind: { speed: 2.7, deg: 305, gust: 2.85 }, clouds: { all: 0 }, dt: 1719818824, sys: { sunrise: 1719805134, sunset: 1719856875 }, timezone: 3600, id: 0, name: "", cod: 200 }; async function EventsRender() { try { let e = await fetch("data/eventsdata.json"), t = await e.json(); t.forEach(e => { l(e) }) } catch (s) { console.log(s) } } async function MemberShip() { try { let e = await fetch("data/membershiplevels.json"), t = await e.json(); s(t) } catch (a) { console.log(a) } } EventsRender(), a(), MemberShip(); let formdata = document.getElementById("join-form"); formdata && formdata.addEventListener("submit", e => { e.preventDefault(), i() }); let images = document.querySelectorAll("[data-src]"); images.forEach(e => { o.observe(e) }), d(), console.log("i am here"); let array1 = [1, 2, 8, 20], array2 = [2, 3, 8]; function combinearrays(e, t) { for (let s = 0; ai < e.length; s++)for (let a = 0; a < t.length; a++)e[s]; return e }


document.addEventListener('DOMContentLoaded', function () {
  const visitMessageElement = document.querySelectorAll('.sidebar');
  const lastVisit = localStorage.getItem('lastVisit');
  const currentVisit = new Date();

  if (lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = currentVisit - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      visitMessageElement.textContent = 'Welcome back! You visited us today.';
    } else if (daysDifference === 1) {
      visitMessageElement.textContent = `Welcome back! You visited us yesterday.`;
    } else {
      visitMessageElement.textContent = `Welcome back! `;
    }
  } else {
    visitMessageElement.textContent = 'Welcome to Busy Corner Chamber of Commerce!';
  }

  localStorage.setItem('lastVisit', currentVisit);
});