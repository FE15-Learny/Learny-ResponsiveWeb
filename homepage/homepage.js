// ==================== HAMBURGER MENU ============================

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navbar.classList.toggle("show-menu");
  navLinks.classList.toggle("show-menu");
});


//   // PROFILE

// // Get buttons
// const signupBtn = document.getElementById("signup");
// const loginBtn = document.getElementById("login");
// const profileBtn = document.getElementById("profile");

// // Add event listener to signup button
// signupBtn.addEventListener("click", function() {
//   // Perform signup process here
//   // If signup is successful, hide signup and login buttons, and show profile button
//   signupBtn.style.display = "none";
//   loginBtn.style.display = "none";
//   profileBtn.style.display = "block";
// });

// // Add event listener to login button
// loginBtn.addEventListener("click", function() {
//   // Perform login process here
//   // If login is successful, hide signup and login buttons, and show profile button
//   signupBtn.style.display = "none";
//   loginBtn.style.display = "none";
//   profileBtn.style.display = "block";
// });


