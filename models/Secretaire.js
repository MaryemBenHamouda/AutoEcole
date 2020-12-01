const mongoose = required("mongoose");

const SecretaireSchema = mongoose.Schema({
  candidat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidat",
    },
  ],
  moniteur: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "moniteur",
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
model.exports = mongoose.Schema("secretaire", SecretaireSchema);
