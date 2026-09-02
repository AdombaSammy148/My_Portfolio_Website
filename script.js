const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme","dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme","light");
    }
});

if (localStorage.getItem("theme")==="dark") {
    document.body.classList.add("dark-mode")
    ;
    themeToggle.textContent = "☀️";
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