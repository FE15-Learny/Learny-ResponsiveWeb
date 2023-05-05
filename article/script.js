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
        window.location.href = "../login/login.html";
    });
});

//   kode JavaScript untuk mengarahkan pengguna ke halaman signup.html saat tombol Sign Up ditekan:
document.addEventListener("DOMContentLoaded", function() {
    var signUpButton = document.getElementById("signup");

    signUpButton.addEventListener("click", function() {
        // mengarahkan pengguna ke halaman signup.html
        window.location.href = "../login/signup.html";
    });
});

