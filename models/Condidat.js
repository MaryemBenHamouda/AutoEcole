const mongoose = require("mongoose");

const CandidatSchema = mongoose.Schema({
  code: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "code",
    },
  ],
  conduite: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conduite",
    },
  ],
  examenCode: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "examenCode",
    },
  ],
  examenConduite: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "examenConduite",
    },
  ],
  voiture: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vehicule",
    },
  ],
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  nomMari: {
    type: String,
  },
  cin: {
    type: Number,
    required: true,
  },
  datecin: {
    type: Date,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  dateNaissance: {
    type: Date,
    required: true,
  },
  lieu: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("candidat", CandidatSchema);
