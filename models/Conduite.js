const mongoose = require("mongoose");

const CoduiteSchema = mongoose.Schema({
  candidat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidat",
    },
  ],
  heur: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  montantpayer: {
    type: Number,
  },
  montantmanq: {
    type: Number,
  },
  prixheur: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("code", CoduiteSchema);
