document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});

document.querySelector(".mod").textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    const visitsContainer = document.querySelector(".visits span"); // Targeting the <span> inside .visits
    const lastVisitKey = "lastVisit";
    const now = new Date();

    let lastVisit = localStorage.getItem(lastVisitKey);

    if (!lastVisit) {
        // First visit
        visitsContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        lastVisit = new Date(lastVisit);
        const timeDiff = now - lastVisit;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            visitsContainer.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysDiff === 1 ? "day" : "days";
            visitsContainer.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
        }
    }

    // Store current visit date
    localStorage.setItem(lastVisitKey, now.toISOString());
});