const card = document.querySelector(".card-inner");
const switchButtons = document.querySelectorAll(".switch-card-button");
const passwordButtons = document.querySelectorAll(".toggle-password");
passwordButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.target);
        const icon = button.querySelector("img");

        if (input.type === "password") {
            input.type = "text";
            icon.src = "images/eye.svg";
            button.setAttribute("aria-label", "Hide password");
            button.setAttribute("aria-pressed", "true");
        } else {
            input.type = "password";
            icon.src = "images/eye-slash.svg";
            button.setAttribute("aria-label", "Show password");
            button.setAttribute("aria-pressed", "false");
        }
    });
});
switchButtons.forEach((button) => {
    button.addEventListener("click", () => {
            card.classList.toggle("flipped");
    });
});
const signupForm = document.querySelector(".signup-part form");
const loginForm = document.querySelector(".login-part form");

const signupMessage = document.getElementById("signup-message");
const loginMessage = document.getElementById("login-message");
function showSuccessMessage(messageElement, text) {
    messageElement.querySelector("span").textContent = text;
    messageElement.classList.remove("show");
    void messageElement.offsetWidth;
    messageElement.classList.add("show");
    setTimeout(() => {
        messageElement.classList.remove("show");
    }, 3500);
}
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showSuccessMessage(
        signupMessage,
        "Your account has been created successfully, diva!"
    );
});
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showSuccessMessage(
        loginMessage,
        "Welcome back, diva! We've missed you."
    );
});
