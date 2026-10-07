const card = document.querySelector(".card-inner");
const switchButtons = document.querySelectorAll(".switch-card-button");
switchButtons.forEach((button) => {
    button.addEventListener("click", () => {
            card.classList.toggle("flipped");
    });
})