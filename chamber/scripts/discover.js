/*function LazyLoad() {
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
*/

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (src) {
        img.src = src;
    }
}

function LazyLoad() {
    const blueDivs = document.querySelectorAll(".blue-background");

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Load image when 10% of it is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                if (img) {
                    preloadImage(img);

                    // Add load event listener to manage the loaded class
                    img.addEventListener('load', () => {
                        console.log('Image loaded:', img.src); // Debugging line
                        entry.target.classList.add("loaded");
                    });

                    // Also handle error case
                    img.addEventListener('error', () => {
                        console.error('Error loading image:', img.src); // Debugging line
                    });
                }

                // Stop observing this element as it's already been processed
                observer.unobserve(entry.target);
            }else{
                entry.target.classList.remove("loaded");
            }
        });
    }, observerOptions);

    blueDivs.forEach(div => {
        observer.observe(div);
    });
}
export { LazyLoad};

// Initialize the observer on page load

