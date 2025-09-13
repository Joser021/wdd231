// const card = document.querySelector(".cards");
// const image = document.createElement("img");

// image.setAttribute("src", "images/customer.png");


// card.append(image);
const url = "scripts/members.json";

const cards = document.querySelector(".cards");

const memberData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (membersData) => {
    membersData.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let image = document.createElement("img");
        let address = document.createElement("p")
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let membership = document.createElement("p");
        let allInf = document.createElement("div");
        let article = document.createElement("article");

        let title = document.createElement("div");
        name.textContent = `${member.name}`;
        membership.textContent = `Membership: ${member.membership_level}`;

        title.appendChild(name);
        title.appendChild(membership);

        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = `Website: ${member.website_url}`;
        
        image.setAttribute("src", member.image_filename);
        image.setAttribute("alt", `${member.name} image`);
        image.setAttribute("loading", "lazy");
        card.setAttribute("class", "members-inf")
        
        allInf.appendChild(title);
        allInf.appendChild(image);
        allInf.appendChild(article);
        article.appendChild(address);
        article.appendChild(phone);
        article.appendChild(website);
        card.appendChild(allInf);

        cards.appendChild(card);
    })
};

memberData();