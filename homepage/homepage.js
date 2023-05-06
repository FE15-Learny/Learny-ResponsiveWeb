// ==================== HAMBURGER MENU ============================

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navbar.classList.toggle("show-menu");
  navLinks.classList.toggle("show-menu");
});



// ==================== BUTTON LOGIN / SIGN UP ============================

// kode JavaScript untuk mengarahkan pengguna ke halaman login.html saat tombol Log In ditekan
document.addEventListener("DOMContentLoaded", function() {
    var logInButton = document.getElementById("login");
  
    logInButton.addEventListener("click", function() {
      // mengarahkan pengguna ke halaman login.html
      window.location.href = "login.html";
    });
  });

//   kode JavaScript untuk mengarahkan pengguna ke halaman signup.html saat tombol Sign Up ditekan:
document.addEventListener("DOMContentLoaded", function() {
    var signUpButton = document.getElementById("signup");
  
    signUpButton.addEventListener("click", function() {
      // mengarahkan pengguna ke halaman signup.html
      window.location.href = "signup.html";
    });
  });
  


//   kode JavaScript untuk menambahkan event listener pada tombol Sign Up dan Log In:
document.addEventListener("DOMContentLoaded", function() {
    var signUpButton = document.getElementById("signup");
    var logInButton = document.getElementById("login");
  
    signUpButton.addEventListener("click", function() {
      // kode untuk menangani event saat tombol Sign Up ditekan
      console.log("Tombol Sign Up ditekan");
    });
  
    logInButton.addEventListener("click", function() {
      // kode untuk menangani event saat tombol Log In ditekan
      console.log("Tombol Log In ditekan");
    });
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


