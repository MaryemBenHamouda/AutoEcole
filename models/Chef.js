const mongoose = required("mongoose");

const ChefSchema = mongoose.Schema({
  secretaire: [
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
  voiture: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "voiture",
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

  date: {
    type: Date,
    default: Date.now,
  },
});
model.exports = mongoose.Schema("Chef", ChefSchema);
