const childContainer = document.querySelector("#child-container");
const teenContainer = document.querySelector("#teen-container");
const collegeContainer = document.querySelector("#college-container");
const todayContainer = document.querySelector("#today-container");
const recsContainer = document.querySelector("#recs-container");
const recForm = document.querySelector("#rec-form");

// const baseURL = "http://localhost:5100";

const createSongCard = (arr) => {
  arr.map((elem) => {
    const songCard = document.createElement("div");
    songCard.classList.add("song-card");

    songCard.innerHTML = `
    <iframe style="border-radius:12px" src="${elem.src}" width="230" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    <div id="text-card">
      <h3 class="song-name">"${elem.title}"</h3>
      <h4 class="artist">By: ${elem.artist}</h4>
      <p class="why-rec">${elem.why}</p>
    </div>
    `;

    if (elem.tag === "child") {
      childContainer.appendChild(songCard);
    } else if (elem.tag === "teen") {
      teenContainer.appendChild(songCard);
    } else if (elem.tag === "college") {
      collegeContainer.appendChild(songCard);
    } else {
      todayContainer.appendChild(songCard);
    }
  });
};

const createRecList = (arr) => {
  arr.map((elem) => {
    let { id, title, artist, URL, name, description } = elem;
    const recCard = document.createElement("div");
    recCard.classList.add("rec-card");
    name = name.toLowerCase().replaceAll(" ", "-");

    recCard.innerHTML = `
    <div class="rec-card-info" id="song-rec-sect">
      <h4>🎵 ${title}</h4>
      <h4>👤 ${artist}</h4>
      <h4>▶️ <button id="url-btn" onclick="window.open('${URL}','_blank')">Listen</button></h4>
    </div>
    <hr>
    <div class="rec-card-info" id="user-rec-sect">
      <h4>@${name}</h4>
      <p>${description}</p>
    </div>
    <div id="close-rec-sect">
      <button id="x-btn" onclick="deleteRec(${id})">❌</button>
    </div>
    `;

    recsContainer.appendChild(recCard);
  });
};

const getSongs = () => {
  axios
    .get(`/api/songs`)
    .then((res) => createSongCard(res.data))
    .catch((err) => console.log(err));
};

const getRecs = () => {
  axios
    .get(`/api/recs`)
    .then((res) => createRecList(res.data))
    .catch((err) => console.log(err));
};

const postRec = (evt) => {
  evt.preventDefault();

  let title = document.querySelector("#title-input");
  let artist = document.querySelector("#artist-input");
  let url = document.querySelector("#url-input");
  let name = document.querySelector("#name-input");
  let description = document.querySelector("#description-input");

  let bodyObj = {
    title: title.value,
    artist: artist.value,
    URL: url.value,
    name: name.value,
    description: description.value
  };

  axios
    .post(`/api/recs`, bodyObj)
    .then((res) => {
      recsContainer.innerHTML = "";
      createRecList(res.data);
    })
    .catch((err) => console.log(err));

  title.value = "";
  artist.value = "";
  url.value = "";
  name.value = "";
  description.value = "";
};

const deleteRec = (id) => {
  axios
    .delete(`/api/recs/${id}`)
    .then((res) => {
      recsContainer.innerHTML = "";
      createRecList(res.data);
    })
    .catch((err) => console.log(err));
};

recForm.addEventListener("submit", postRec);

getSongs();
getRecs();
