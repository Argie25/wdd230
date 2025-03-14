document.querySelector(".year").textContent = new Date().getFullYear();

document.querySelector(".lastModified").textContent = document.lastModified;


const modeBtn = document.querySelector("#mode");
const main = document.querySelector("main");

modeBtn.addEventListener("click", () => {
    if (modeBtn.textContent.includes("🕶️")){
        main.style.background = "black";
        main.style.color = "white";
        main.querySelector("h1").style.color = "white";
        modeBtn.textContent = "🔆";
    }

    else {
        main.style.background = "white";
        main.style.color = "black";
        main.querySelector("h1").style.color = "black";
        modeBtn.textContent = "🕶️";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});