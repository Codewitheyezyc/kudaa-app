// --- Mock Database ---
import accounts from "./data.js";
const users = [
    { username: "Isaac", pin: "1234" },
    { username: "Amina", pin: "5678" },
];

// --- Select elements using classes only ---
const heroSection = document.querySelector(".hero");
const dashboard = document.querySelector(".dashboard");
const loginForm = document.querySelector(".hero__form");
const loginInputs = document.querySelectorAll(".hero__input");
const welcomeText = document.querySelector(".dashboard__welcome");

// --- Hide dashboard on load ---
dashboard.style.display = "none";

// --- Check if user already logged in ---
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (loggedInUser) {
  heroSection.style.display = "none";
  dashboard.style.display = "block";
  welcomeText.textContent = `Welcome ${loggedInUser.username}`;
}

// --- Listen for form submission ---
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = loginInputs[0].value.trim();
  const pin = loginInputs[1].value.trim();

  // Find matching user
  const user = users.find((u) => u.username === username && u.pin === pin);

  if (user) {
    // Save user info in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Show dashboard
    heroSection.style.display = "none";
    dashboard.style.display = "block";
    welcomeText.textContent = `Welcome ${user.username}`;
  } else {
    alert("Invalid username or PIN. Please try again.");
  }

  // Clear inputs
  loginInputs[0].value = "";
  loginInputs[1].value = "";
});

// --- Logout this is optional ---
const closeAccountForm = document.querySelector(".dashboard__close");
if (closeAccountForm) {
  closeAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedInUser");
    dashboard.style.display = "none";
    heroSection.style.display = "block";
  });
}



// transaction function
const Transaction = () => {
    console.log("Transactions");
    
}
Transaction()
