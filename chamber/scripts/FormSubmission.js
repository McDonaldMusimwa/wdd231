import { rendernewUser } from "./thankyou.js";

async function joinSubmission() {
  const fistname = document.getElementById("firstname").value || " ";
  const lastname = document.getElementById("lastname").value || " ";
  const organisationtitle =
    document.getElementById("organization-title").value || " ";
  const email = document.getElementById("email").value || "";
  const phone = document.getElementById("phone").value || "";
  const organisationname = document.getElementById("organization").value || "";
  const membership = document.getElementById("dropdown").value || "";
  const organisationdescription =
    document.getElementById("organizationdescription").value || "";
  let timestamp = document.getElementById("timestamp").value || "";
  timestamp = new Date().toISOString();

  const user = {
    firstname: fistname,
    lastname: lastname,
    organisationtitle: organisationtitle,
    email: email,
    phone: phone,
    organisationname: organisationname,
    membership: membership,
    organisationdescription: organisationdescription,
    timestamp: timestamp,
  };

  //localStorage.setItem("userData", JSON.stringify(user));
  //const querystring = new URLSearchParams(user).toString();


  /*
  document.addEventListener("DOMContentLoaded", () => {
    const userData = localStorage.getItem("userData");
    console.log(userData)
    if (userData) {
      const user = JSON.parse(userData);
      console.log(user)
      rendernewUser(user);
    } else {
      console.error("No user data found in localStorage.");
    }
  });
*/
  window.location.href = `thankyou.html`;
  rendernewUser(user)
}

export { joinSubmission };
