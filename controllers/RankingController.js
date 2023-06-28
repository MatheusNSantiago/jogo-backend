const mongoose = require("mongoose");
const Ranking = require("../models/Ranking");

module.exports = {
    async mostrarRankings(req, res) {
        let rankings = await Ranking.find();
        return res.json(rankings);
    },

    async mostrarPontuacaoByNickname(req, res) {
        let ranking = await Ranking.find({ nickname: req.params.nickname });
        return res.json(ranking);
    },

    async adicionarRanking(req, res) {
        const ranking = await Ranking.create(req.body);
        return res.json(ranking);
    },
};
