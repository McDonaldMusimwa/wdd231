function LazyLoad() {
    const blueDivs = document.querySelectorAll(".blue-background");

    blueDivs.forEach((div) => {
     
        const img = div.querySelector("img");
      
        function loaded() {
            div.classList.add("loaded");
        }

        if (img.complete) {
            loaded();
        } else {
            img.addEventListener("load", loaded);
        }
    });
}

export {LazyLoad}