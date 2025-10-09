
  // Mock "user database"
  const users = [
    { username: "Isaac", pin: "1234" },
    { username: "Amina", pin: "5678" },
  ];

  // Select elements
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const pinInput = document.getElementById("pin");
  const dashboard = document.querySelector(".dashboard");
  const heroSection = document.querySelector(".hero");
  const errorMessage = document.getElementById("errorMessage");
  const welcomeMessage = document.querySelector(".dashboard__welcome");
  const logoutBtn = document.getElementById("logoutBtn");

  // Function to show dashboard
  function showDashboard(username) {
    heroSection.style.display = "none";
    dashboard.style.display = "block";
    welcomeMessage.textContent = `Welcome ${username}`;
    errorMessage.style.display = "none";
  }

  // Function to show login form
  function showLogin() {
    heroSection.style.display = "block";
    dashboard.style.display = "none";
    errorMessage.style.display = "none";
  }

  // Check if a user is already logged in
  const savedUser = localStorage.getItem("loggedInUser");
  if (savedUser) {
    showDashboard(savedUser);
  }

  // Handle login
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const pin = pinInput.value.trim();

    // Validate user
    const validUser = users.find(
      (user) => user.username === username && user.pin === pin
    );

    if (validUser) {
      // Save to localStorage
      localStorage.setItem("loggedInUser", username);
      showDashboard(username);
    } else {
      errorMessage.style.display = "block";
    }

    usernameInput.value = "";
    pinInput.value = "";
  });

  // Handle logout
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    showLogin();
  });

