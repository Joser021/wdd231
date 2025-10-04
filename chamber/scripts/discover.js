import { places } from "../data/places.mjs"

const discorverCard = document.querySelector(".discover-card");

places.forEach((place) => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const address = document.createElement("p");
    const cost = document.createElement("p");
    const image = document.createElement("img");
    const button = document.createElement("button");

    image.setAttribute("src", `${place.photoUrl}`);
    image.setAttribute("alt", `Picture of ${place.name}`);
    image.setAttribute("loading", "lazy");

    name.textContent = `${place.name}`;
    description.textContent = `${place.description}`;
    address.textContent = `${place.address}`;
    cost.textContent = `${place.cost}`;
    button.textContent = "Learn more"
    

    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(description)
    card.appendChild(address)
    card.appendChild(button)

    discorverCard.appendChild(card)

    button.addEventListener("click", () => {
        displayPlaceCost(place)
    })
})


// DIALOG BOX
const placeCost = document.querySelector("#place-cost");

function displayPlaceCost(place) {
    placeCost.innerHTML = ``;
    placeCost.innerHTML = `
    <h2>${place.name} Membership</h2>
    <h3>${place.cost}</h3>
    <button id="closeModal">close</button>`;


    placeCost.showModal();

    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
        placeCost.close();
    })

    placeCost.addEventListener("click", (c) => {
        if (c.target === placeCost) {
            placeCost.close();
        }
    });
}
