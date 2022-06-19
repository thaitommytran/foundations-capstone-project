const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getSongs, getRecs } = require("./controller");

app.get("/api/songs", getSongs);
app.get("/api/recs", getRecs)

const port = 5100;

app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT:${port}`));
