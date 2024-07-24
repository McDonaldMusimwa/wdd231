function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (src) {
        img.src = src;
    }
}

const imgOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Load image when 10% of it is visible
};

const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadImage(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, imgOptions);

export { imgObserver };
