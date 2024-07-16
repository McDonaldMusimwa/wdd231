function displayVisitorMessage() {
  const lastVisit = localStorage.getItem('lastVisit');
  const currentVisit = Date.now();

const messagetag = document.createElement("span")
  let message = '';

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const lastVisitDate = new Date(parseInt(lastVisit, 10));
    const timeDifference = currentVisit - lastVisitDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
      message = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysDifference} days ago.`;
    }
  }

  localStorage.setItem('lastVisit', currentVisit.toString());

  // Display the message in the sidebar
  const sidebar = document.querySelector('.sidebar');
  messagetag.innerHTML=message

  sidebar.appendChild(messagetag);
  sidebar.style.display = 'block'; // Ensure sidebar is visible

  // Hide the sidebar after 10 seconds
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 10000);
}


export { displayVisitorMessage }