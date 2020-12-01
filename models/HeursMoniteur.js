const mongoose = require("mongoose");
const { model } = require("./Condidat");

const HeursMoniteurSchema = mongoose.Schema({
  moniteur: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidat",
    },
  ],
  dateTr: {
    type: Date,
    required: true,
  },
  heurTr: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

model.exports = mongoose.Schema("heursMoniteur", HeursMoniteurSchema);
