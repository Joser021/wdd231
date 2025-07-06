const today = new Date();
const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

year.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

const hamburger = document.querySelector("#ham-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));