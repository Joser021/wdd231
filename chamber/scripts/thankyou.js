const thankyou = new URLSearchParams(window.location.search);
const timestamp = thankyou.get("timestamp");

document.querySelector("#results").innerHTML = `
<div class="thankyou-inf">
    <p class="name"><strong>${thankyou.get("firstName")} ${thankyou.get("lastName")}</strong></p>
    <p><strong>Organization title:</strong> ${thankyou.get("title")}</p>
    <p><strong>Organization name:</strong> ${thankyou.get("organization")}</p>
    <p><strong>Organization description:</strong> ${thankyou.get("description")}</p>
    <p><strong>Membership type:</strong> ${thankyou.get("membership")}</p>
    <p><strong>Your Phone:</strong> ${thankyou.get("phonenumber")}</p>
    <p><strong>Your email:</strong> ${thankyou.get("username")}</p>
</div>
`;