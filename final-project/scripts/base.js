// DISPLAYS THE CARDS IN THE PAGE
const url = "data/movies.json"
const cardMovies = document.querySelector("#cards");

const movieData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    DisplayMovieInf(data.movies);
}
if (cardMovies) {   
    movieData();
}

const DisplayMovieInf = (moviesData) => {
    moviesData.forEach((movie) => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let button = document.createElement("button");
        let cover = document.createElement("img");

        name.textContent = `${movie.name}`;
        button.textContent = "Learn More";
        cover.setAttribute("src", `images/${movie.cover}`)
        cover.setAttribute("alt", `${movie.cover} cover movie`)
        cover.setAttribute("loading", `lazy`)

        card.appendChild(cover);
        card.appendChild(name);
        card.appendChild(button);

        button.addEventListener("click", () => {
            displayDescription(movie)
        })

        cardMovies.appendChild(card);
    })
}

// DATETIME AND NAVIGATION BAR
const today = new Date();
const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

year.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

const hamburger = document.querySelector(".ham-menu");
const navLinks = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
})

document.querySelectorAll(".navbar a").forEach(n => n.addEventListener("click", () => {
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

// DIALOG BOX
const movieDescription = document.querySelector(".movie-inf");

function displayDescription(movie) {
    movieDescription.innerHTML = ``;
    movieDescription.innerHTML = `
    <p>${movie.genre}</p>
    <p>${movie.description}</p>
    <button id="closeModal">close</button>`;


    movieDescription.showModal();

    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
        movieDescription.close();
    })

    movieDescription.addEventListener("click", (c) => {
        if (c.target === movieDescription) {
            movieDescription.close();
        }
    });
}
