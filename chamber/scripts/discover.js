import { places } from "../data/places.mjs"
console.log(places);


const discorverCard = document.querySelector(".discover-card");

places.forEach((place) => {
    // console.log(place.photoUrl);
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const address = document.createElement("p");
    const cost = document.createElement("p");
    const image = document.createElement("img");

    image.setAttribute("src", `${place.photoUrl}`);
    image.setAttribute("alt", `Picture of ${place.name}`);
    image.setAttribute("loading", "lazy");

    name.textContent = `${place.name}`;
    description.textContent = `${place.description}`;
    address.textContent = `${place.address}`;
    cost.textContent = `${place.cost}`;

    card.appendChild(image)
    card.appendChild(name)
    // card.appendChild(cost)
    card.appendChild(description)
    card.appendChild(address)

    discorverCard.appendChild(card)
    
//     console.log(place.name);
})

