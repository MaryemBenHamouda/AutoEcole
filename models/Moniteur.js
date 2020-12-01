const mongoose = require("mongoose");
const { model } = require("./Condidat");

const MoniteurSchema = mongoose.Schema({
  candidat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidat",
    },
  ],
  heursMoniteur: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "heursMoniteur",
    },
  ],
  Nom: {
    type: String,
    required: true,
  },
  Prenom: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
  },

  tel: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
model.exports = mongoose.Schema("moniteur", MoniteurSchema);
