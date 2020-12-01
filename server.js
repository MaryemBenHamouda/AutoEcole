const express = require("express");
const mongoose = require("mongoose");
const app = express();

//init meddlwere
app.use(express.json());
//connection DB
const db =
  "mongodb+srv://maryem4070:maryem4070@autoecole.myj8m.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("DataBase connected...");
  }
);

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is running on port 5000...");
});
