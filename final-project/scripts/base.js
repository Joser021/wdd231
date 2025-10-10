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
        let description = document.createElement("p");
        let button = document.createElement("button");
        let cover = document.createElement("img");

        name.textContent = `${movie.name}`;
        description.textContent = `${movie.description}`;
        button.textContent = "Learn More";
        cover.setAttribute("src", `images/${movie.cover}`)

        card.appendChild(cover);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(button);

            cardMovies.appendChild(card);
    })
}

