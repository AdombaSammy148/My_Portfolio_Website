const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Switch to Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙 Switch to Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Switch to Light Mode";
}

function showMessage() {
    let visitor = prompt("What is your name?");

    if (visitor) {
        alert("Welcome to my website, " + visitor + "!");
    } else {
        alert("Welcome to my website!");
    }
}

function viewProject() {
    alert("This is my first website project!");
}

const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

const menuOverlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    menuOverlay.classList.toggle("open");

    if (sideMenu.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

menuOverlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("open");
});

const menuLinks = sideMenu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("open");
        menuOverlay.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});