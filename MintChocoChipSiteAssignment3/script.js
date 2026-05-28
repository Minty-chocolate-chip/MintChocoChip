
const feedbackForm = document.querySelector("#feedbackForm");
const popup = document.querySelector("#popup");
const closePopup = document.querySelector("#closePopup");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    popup.classList.add("show");
    feedbackForm.reset();
  });
}

if (closePopup) {
  closePopup.addEventListener("click", function() {
    popup.classList.remove("show");
  });
}

window.addEventListener("click", function(event) {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});
