const mongoose = required("mongoose");

const ChefSchema = mongoose.Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usert",
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

  date: {
    type: Date,
    default: Date.now,
  },
});
model.exports = mongoose.Schema("Chef", ChefSchema);
