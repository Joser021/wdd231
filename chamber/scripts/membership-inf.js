const memberships = [
  {
    name: "NP",
    price: 0,
    description: "Non-profit Membership",
    details:
      "Non-profit organizations are welcome at São Luís Chamber — connect with our community and access valuable resources at no cost!",
  },
  {
    name: "Bronze",
    price: 100,
    description: "Low level membership",
    details:
      "Ideal for growing small businesses — enjoy essential chamber benefits like networking opportunities, visibility in our directory, and access to key resources to help you succeed.",
  },
  {
    name: "Silver",
    price: 250,
    description: "mid-level membership",
    details:
      "Designed for expanding businesses — enjoy all Bronze perks plus early access to events, a highlighted directory profile, and exclusive quarterly workshops to support your growth.",
  },
  {
    name: "Gold",
    price: 500,
    description: "Greatest membership. Get it now",
    details:
      "Unlock the full potential of the chamber with Gold Membership — enjoy VIP early access to events, premium networking opportunities, and exclusive benefits designed to elevate your business.",
  },
];

const membershipDetails = document.querySelector("#membership-details");

function displayMembershipDetails(membership) {
    membershipDetails.innerHTML = ``;
    membershipDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${membership.name} Membership</h2>
    <h3>U$${membership.price} per Year</h3>
    <p><strong>Description</strong>: ${membership.description}</p>
    <p>${membership.details}</p>`;


    membershipDetails.showModal();

    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
        membershipDetails.close();
    })

    membershipDetails.addEventListener("click", (c) => {
        if (c.target === membershipDetails) {
            membershipDetails.close();
        }
    });
}

function createCards(membershipsList) {
    document.querySelector(".membership-inf").innerHTML = ``;

    membershipsList.forEach((membership) => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let description = document.createElement("p");
        let Button = document.createElement("button");

        card.setAttribute("class", "animation")

        name.innerHTML = `${membership.name} Membership`;
        description.innerHTML = membership.description;
        Button.innerHTML = "Learn More";

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(Button);

        document.querySelector(".membership-inf").appendChild(card);

        Button.addEventListener("click", () => {
            displayMembershipDetails(membership)
        })
    })
}

createCards(memberships)