const mongoose = required("mongoose");

const VoitureSchema = mongoose.Schema({
  candidat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidat",
    },
  ],
  type: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
  },
  datereserver: {
    type: Date,
  },
  heurreserver: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("voiture", VoitureSchema);
