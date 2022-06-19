const songs = require("./db.json");
let uniqueId = 1;
const recs = [];

module.exports = {
  getSongs: (req, res) => {
    res.status(200).send(songs);
  },

  getRecs: (req, res) => {
    res.status(200).send(recs);
  },

  postRec: (req, res) => {
    let { title, artist, URL, name, description } = req.body;

    let newRec = {
      id: uniqueId,
      title,
      artist,
      URL,
      name,
      description
    };

    recs.push(newRec);
    uniqueId++;
    res.status(200).send(recs);
  },

  deleteRec: (req, res) => {
    const index = recs.findIndex((elem) => elem.id === +req.params.id);

    recs.splice(index, 1);

    res.status(200).send(recs);
  }
};
