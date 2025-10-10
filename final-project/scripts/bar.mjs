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
})

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}))

document.addEventListener("click", (c) => {
    if (!hamburger.contains(c.target) && !navLinks.contains(c.target)){
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    }
})

let touchStart = 0;
document.addEventListener("touchstart", (t) => {
    touchStart = t.touches[0].clientX;
})

document.addEventListener("touchend", (t) => {
    const touchEnd = t.changedTouches[0].clientX;

    if (touchStart !== touchEnd && !hamburger.contains(t.target) && !navLinks.contains(t.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    }
})