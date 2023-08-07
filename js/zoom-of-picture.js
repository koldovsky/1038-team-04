const seasons = ["summer", "winter", "spring", "autumn", "fishing", "spa"];

function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

function addOnClickHandler(buttons) {
  buttons.forEach((btn) => {
    btn.onclick = function() {
      const modalId = `modal_${this.id.slice(9)}`;
      const modal = document.getElementById(modalId);
      openModal(modal);
    };
  });
}

seasons.forEach((season) => {
  const buttons = document.querySelectorAll(`[id^="zoom-btn_${season}-"]`);
  addOnClickHandler(buttons);
});

const spanClose = document.querySelectorAll(".close");

spanClose.forEach((span) => {
  span.onclick = function() {
    const modal = this.closest(".modal");
    closeModal(modal);
  };
});

window.onclick = function(event) {
  const openModalElement = document.querySelector(".modal[style*='display: block;']");
  if (openModalElement && event.target === openModalElement) {
    closeModal(openModalElement);
  }
};
