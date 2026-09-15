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
let menuScrollPosition = 0;

function closeMenu() {
    const scrollPosition = menuScrollPosition;

    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("open");
    document.body.classList.remove("menu-open");
    document.body.style.top = "";
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.setAttribute("aria-expanded", "false");

    window.scrollTo(0, scrollPosition);
}

menuToggle.addEventListener("click", () => {
    const isOpening = !sideMenu.classList.contains("open");

    if (isOpening) {
        menuScrollPosition = window.scrollY;
    }

    const isOpen = sideMenu.classList.toggle("open");
    menuOverlay.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);

    if (isOpen) {
        document.body.style.top = `-${menuScrollPosition}px`;
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation menu");
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        closeMenu();
    }
});

menuOverlay.addEventListener("click", () => {
    closeMenu();
});

const menuLinks = sideMenu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMenu();
    }
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