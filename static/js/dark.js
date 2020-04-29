function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);

    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fas fa-sun";
        metaThemeColor.setAttribute("content", "#171717");
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "far fa-moon";
        metaThemeColor.setAttribute("content", "#FFF");
    }
}

var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var metaThemeColor = document.querySelector("meta[name=theme-color]");

// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.className === "far fa-moon") {
        setTheme("dark");
    } else if (toggle.className === "fas fa-sun") {
        setTheme("light");
    }
});



