function ModalFunctionality() {
  const dialog = document.querySelector("dialog");
  const showButton = document.getElementById("openModal");
  const closeButton = document.getElementById("closeModal");

  // "Show the dialog" button opens the dialog modally
  if (showButton) {
    showButton?.addEventListener("click", () => {
      dialog.showModal();
    });
  }
  // "Close" button closes the dialog
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
  }
}
export { ModalFunctionality };
