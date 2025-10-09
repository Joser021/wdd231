const url = "data/movies.json"
const cardMovies = document.querySelector("#cards");

const movieData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    DisplayMovieInf(data.movies);
}

movieData();

const DisplayMovieInf = (moviesData) => {
    moviesData.forEach((movie) => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let description = document.createElement("p");
        let button = document.createElement("button");

        name.textContent = `${movie.name}`;
        description.textContent = `${movie.description}`;
        button.textContent = "Learn More";

        cardMovies.appendChild(name);
        cardMovies.appendChild(description);
        cardMovies.appendChild(button);

        if (cardMovies) {
            cardMovies.appendChild(card);
        }
    })
}

