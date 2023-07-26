const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

// ╭──────────────────────────────────────────────────────────╮
// │                   Conectar ao mongoDB                    │
// ╰──────────────────────────────────────────────────────────╯

require("mongoose").connect(
  `mongodb+srv://matheus-santiago:${process.env["PASSWORD"]}@cluster0.ooxkaen.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// ╭──────────────────────────────────────────────────────────╮
// │                         Express                          │
// ╰──────────────────────────────────────────────────────────╯

const app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors());

const RankingController = require("./controllers/RankingController");

app.post("/ranking", RankingController.adicionarRanking);
app.get("/ranking", RankingController.mostrarRankings);
app.get("/ranking/:nickname", RankingController.mostrarPontuacaoByNickname);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
