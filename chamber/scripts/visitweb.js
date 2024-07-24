function displayVisitorMessage() {
    try {
        let lastVisit = localStorage.getItem("lastVisit");
        const now = Date.now();
        const messageElement = document.createElement("span");
        let message = "";

        if (lastVisit) {
            // Ensure lastVisit is a valid number
            const lastVisitTime = parseInt(lastVisit, 10);
            if (!isNaN(lastVisitTime)) {
                const lastVisitDate = new Date(lastVisitTime);
                const timeDifference = now - lastVisitDate.getTime();
                const daysAgo = Math.floor(timeDifference / 86400000); // 86400000 ms in a day

                message = daysAgo < 1 ? "Back so soon! Awesome!" :
                          daysAgo === 1 ? "You last visited 1 day ago." :
                          `You last visited ${daysAgo} days ago.`;
            } else {
                console.error("Invalid lastVisit value:", lastVisit);
                message = "Welcome! Let us know if you have any questions.";
            }
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
