const childDisplaySection = document.querySelector("#child-container");
const teenDisplaySection = document.querySelector("#teen-container");
const collegeDisplaySection = document.querySelector("#college-container");
const todayDisplaySection = document.querySelector("#today-container");

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
      childDisplaySection.appendChild(songCard);
    } else if (element.tag === "teen") {
      teenDisplaySection.appendChild(songCard);
    } else if (element.tag === "college") {
      collegeDisplaySection.appendChild(songCard);
    } else {
      todayDisplaySection.appendChild(songCard);
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
