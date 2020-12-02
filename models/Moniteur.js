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
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
model.exports = mongoose.Schema("moniteur", MoniteurSchema);
