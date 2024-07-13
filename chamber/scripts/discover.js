function discoverImages(array) {
    const discoverImages = document.getElementById("discoverimages");

    array.forEach(element => {
        const image = document.createElement("img");
        image.src = element.image;
        image.alt = element.alt;
        image.className = "discoverimage";
        image.loading = "lazy"; // Lazy loading attribute
        image.caption = `${element.alt}`;
        discoverImages.appendChild(image);
    });
}

export { discoverImages };
