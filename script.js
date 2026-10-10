const card = document.querySelector(".card-inner");
const switchButtons = document.querySelectorAll(".switch-card-button");
const passwordButtons = document.querySelectorAll(".toggle-password");
passwordButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.target);

        if (input.type === "password") {
        } else {
        }
    });
});
switchButtons.forEach((button) => {
    button.addEventListener("click", () => {
            card.classList.toggle("flipped");
    });
});