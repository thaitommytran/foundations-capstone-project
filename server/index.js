const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static("client"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

const { getSongs, getRecs, postRec, deleteRec } = require("./controller");

app.get("/api/songs", getSongs);
app.get("/api/recs", getRecs);
app.post("/api/recs", postRec);
app.delete("/api/recs/:id", deleteRec);

const port = process.env.PORT || 5100;

app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT:${port}`));
