const songs = require("./db.json");

module.exports = {
  getSongs: (req, res) => {
    res.status(200).send(songs);
  }
};
