const mongoose = require('mongoose');

const RankingSchema = new mongoose.Schema({
  record: {
    torresUsadas: { type: Number, required: true },
    hp: { type: Number, required: true },
    gold: { type: Number, required: true },
  },
  nickname: { type: String, required: true },
});

module.exports = mongoose.model('Ranking', RankingSchema);
