function displayVisitorMessage() {
    try {
        let lastVisit = localStorage.getItem("lastVisit");
        const now = Date.now();
        const messageElement = document.createElement("span");
        let message = "";

        if (lastVisit) {
            const lastVisitDate = new Date(parseInt(lastVisit, 10));
            const timeDifference = now - lastVisitDate.getTime();
            const daysAgo = Math.floor(timeDifference / 864e5);
            message = daysAgo < 1 ? "Back so soon! Awesome!" :
                      daysAgo === 1 ? "You last visited 1 day ago." :
                      `You last visited ${daysAgo} days ago.`;
        } else {
            message = "Welcome! Let us know if you have any questions.";
        }

        localStorage.setItem("lastVisit", now.toString());

        const sidebar = document.querySelector(".sidebar");
        if (sidebar) {
            messageElement.innerHTML = message;
            sidebar.appendChild(messageElement);
            sidebar.style.display = "block";
            setTimeout(() => sidebar.style.display = "none", 10000);
        }
    } catch (error) {
        console.error("Error handling visitor message:", error);
    }
}

export { displayVisitorMessage };
