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
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    signupMessage.textContent = "Your account has been created successfully, diva";
    signupMessage.classList.add("show");
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    loginMessage.textContent = "Welcome back! We've missed you";
    loginMessage.classList.add("show");
});