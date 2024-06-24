function useBusinessData(businessData,businesSection) {
    // Perform operations with the business data
    
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
      img.alt = `${bus.name} logo`;
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
      document.querySelector("article").className = "grid";
      businesSection.appendChild(div);
    });
  }



export {useBusinessData}  