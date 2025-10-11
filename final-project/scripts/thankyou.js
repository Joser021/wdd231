const thankyou = new URLSearchParams(window.location.search);

document.querySelector(".results").innerHTML = `
<div class="about">
    <p class="name"><strong>${thankyou.get("firstName")} ${thankyou.get("lastName")}</strong></p>
    <p><strong>Your email:</strong> ${thankyou.get("username")}</p>
    <p><strong>Movie Name:</strong> ${thankyou.get("movie")}</p>
    <p><strong>Movie Genre:</strong> ${thankyou.get("movie-genre")}</p>
    <p><strong>Movie description:</strong> ${thankyou.get("description")}</p>
</div>
`;