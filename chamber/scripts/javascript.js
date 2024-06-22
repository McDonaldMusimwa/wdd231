//const data = require('./business.json');

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

/* Render Business */

const businesSection = document.getElementById("BusinessesContainer");

// Fetch the JSON data from the server
async function fetchBusiess() {
  try {
    const response =await fetch("data/members.json");
    const data = await response.json();
    useBusinessData(data);
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
}

function useBusinessData(businessData) {
  // Perform operations with the business data
  console.log(businessData);
  businessData.forEach((bus) => {
    const div = document.createElement("section");
    const img = document.createElement("img");
    const atag = document.createElement("a");
    const title = document.createElement("h3");
    const phone = document.createElement("span");
    const adress = document.createElement("span");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    div.className = "BusinessCard";
    div2.className = "logoSide";
    div3.className = "adresSide";

    img.src = bus.logo;
    img.alt = `${bus.name} logo`
    title.innerHTML = bus.name;

    atag.href = bus.site;
    atag.innerHTML = bus.name;
    atag.target = "_blank";
    phone.innerHTML = `Phone: ${bus.phone}`;
    adress.innerHTML = `Adress: ${bus.address}`;

    div3.appendChild(phone);
    div3.appendChild(adress);
    div3.appendChild(atag);

    div2.appendChild(img);
    div2.appendChild(title);

    div.appendChild(div2);
    div.appendChild(div3);
    document.querySelector("article").classList = "grid";
    businesSection.appendChild(div);
  });
}
fetchBusiess()


/* switch directory display*/
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");
const display = document.querySelector("article")

gridButton.addEventListener("click",()=>{
  display.classList.add("grid");
  display.classList.remove("list");
})

listButton.addEventListener("click",()=>{
  display.classList.add("list");
  display.classList.remove("grid")
})
