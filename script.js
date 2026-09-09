const themeToggle = document.getElementById("theme-toggle");

function updateThemeToggle(isDarkMode) {
    const themeIcon = themeToggle.querySelector(".theme-icon");

    document.body.classList.toggle("dark-mode", isDarkMode);
    themeIcon.textContent = isDarkMode ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", isDarkMode ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.setAttribute("aria-pressed", String(isDarkMode));
}

const savedTheme = localStorage.getItem("theme");
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
updateThemeToggle(savedTheme ? savedTheme === "dark" : prefersDarkMode);

themeToggle.addEventListener("click", () => {
    const isDarkMode = !document.body.classList.contains("dark-mode");

    updateThemeToggle(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

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
     menuToggle.textContent = "☰";
});

const menuLinks = sideMenu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("open");
        menuOverlay.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll",() => {
    if (window.scrollY > 1000 ) {
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";    
    }  else{
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
    }
});    