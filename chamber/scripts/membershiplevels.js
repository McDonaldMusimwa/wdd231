function RenderMembershipLevels(members) {
  const membershipcardsContainer = document.getElementById("membership-levels");

  members.forEach((element) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "membership-card";

    const title = document.createElement("h3");

    title.textContent = element.title;
    const cost = document.createElement("h4");
    cost.innerHTML = `R ${element.cost}.00`

    const introParagraph = document.createElement("p");
    introParagraph.textContent = element.description;

    
   const perks = document.createElement("h5")
   perks.innerHTML="Benefits";
   
   const br = document.createElement("hr")

    const perksList = document.createElement("ul");
    perksList.className = "perks-list";
    element.perks.forEach((perk) => {
      const li = document.createElement("li");
      li.innerHTML = perk;
      perksList.appendChild(li);
    });
    

    cardContainer.appendChild(title);
    cardContainer.appendChild(cost)
    cardContainer.appendChild(introParagraph);
    cardContainer.appendChild(perks)
    cardContainer.appendChild(br)
    cardContainer.appendChild(perksList)

    membershipcardsContainer.appendChild(cardContainer);
  });
}



export { RenderMembershipLevels };
