


function businessSpotlight(businessData, business_cards) {
  // Perform operations with the business data


  businessData.forEach((bus) => {
  
    const div = document.createElement("div");
    div.className = "card";

    const topdiv = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.textContent = bus.name;
    const p = document.createElement("p");
    p.textContent =`Membership level :${bus.membershiplevel}`;
    const br = document.createElement("hr");
    topdiv.appendChild(h4);
    topdiv.appendChild(p);
    topdiv.appendChild(br);

    const bottom = document.createElement("div");
    bottom.className ="BusinessSpotLight_Bottom"
    const businesslogo = document.createElement("img");
    businesslogo.src = bus.logo;
    businesslogo.alt = `${bus.name} logo`;

    const businessdatadiv = document.createElement("div");
    
    const span = document.createElement("span");
    span.textContent = `Phone: ${bus.phone}`;
    const span2 = document.createElement("span");
    span2.textContent = `Address: ${bus.address}`;
    const span3 = document.createElement("a");
    span3.href = `${bus.site}`
    span3.innerHTML = `Vist Official Website`;

    businessdatadiv.appendChild(span);
    businessdatadiv.appendChild(span2);
    businessdatadiv.appendChild(span3);

    bottom.appendChild(businesslogo);
    bottom.appendChild(businessdatadiv);

    div.appendChild(topdiv);
    div.appendChild(bottom);
    business_cards.appendChild(div);
  });
}

export { businessSpotlight };
