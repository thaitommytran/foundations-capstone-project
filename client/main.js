const childContainer = document.querySelector("#child-container");
const teenContainer = document.querySelector("#teen-container");
const collegeContainer = document.querySelector("#college-container");
const todayContainer = document.querySelector("#today-container");

const baseURL = "http://localhost:5100";

const createCard = (arr) => {
  arr.map((element) => {
    const songCard = document.createElement("div");
    songCard.classList.add("song-card");

    songCard.innerHTML = `
    <iframe style="border-radius:12px" src="${element.src}" width="230" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <div id="text-card">
            <h3 class="song-name">"${element.title}"</h3>
            <h4 class="artist">By: ${element.artist}</h4>
            <p class="why-rec">${element.why}</p>
        </div>
    `;

    if (element.tag === "child") {
      childContainer.appendChild(songCard);
    } else if (element.tag === "teen") {
      teenContainer.appendChild(songCard);
    } else if (element.tag === "college") {
      collegeContainer.appendChild(songCard);
    } else {
      todayContainer.appendChild(songCard);
    }
  });
};

const getSongs = () => {
  axios
    .get(`${baseURL}/api/songs`)
    .then((res) => createCard(res.data))
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", getSongs);
