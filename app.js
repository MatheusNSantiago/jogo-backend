const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");

// ╭──────────────────────────────────────────────────────────╮
// │                   Conectar ao mongoDB                    │
// ╰──────────────────────────────────────────────────────────╯

var cors = require("cors");
require("mongoose").connect(
    `mongodb+srv://matheus-santiago:${process.env["PASSWORD"]}@cluster0.ooxkaen.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// ╭──────────────────────────────────────────────────────────╮
// │                         Express                          │
// ╰──────────────────────────────────────────────────────────╯

const app = express();
const RankingController = require("./controllers/RankingController");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/ranking", RankingController.adicionarRanking);

app.listen(3000, () => console.log(`Example app listening on port 3000`));
