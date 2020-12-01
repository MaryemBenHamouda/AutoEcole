const mongoose = require("mongoose");

const ExamenCoduiteSchema = mongoose.Schema({
  candidat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidat",
    },
  ],
  dateEx: {
    type: Date,
    required: true,
  },
  heurEx: {
    type: Number,
    required: true,
  },
  montantpayer: {
    type: Number,
  },
  montantmanq: {
    type: Number,
  },
  prixEx: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("examenCoduite", ExamenCoduiteSchema);
