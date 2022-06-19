const songs = require("./db.json");
const recs = [
  {
    id: 1,
    title: "Heat",
    artist: "Chris Brown",
    URL: "https://www.youtube.com/watch?v=i_vMte-NHkY",
    name: "Thai Tran",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ad omnis quam suscipit voluptatum deleniti qui quo doloribus, quis corporis alias perspiciatis quisquam sint inventore enim cupiditate architecto praesentium. Quaerat est, ex, cumque adipisci ea dignissimos dicta aut autem assumenda necessitatibus, voluptatem ipsam quidem impedit nam recusandae quasi ullam maiores!"
  }
];

module.exports = {
  getSongs: (req, res) => {
    res.status(200).send(songs);
  },

  getRecs: (req, res) => {
    res.status(200).send(recs);
  },

  deleteRec: (req, res) => {
    const index = recs.findIndex((elem) => elem.id === +req.params.id);
    recs.splice(index, 1);
    res.status(200).send(recs);
  }
};
