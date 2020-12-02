const mongoose = required("mongoose");

const UserSchema = mongoose.Schema({
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
model.exports = mongoose.Schema("user", UserSchema);
