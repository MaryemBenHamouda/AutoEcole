const express = require("express");
const router = express.router();
const { check, validationResult } = require("express-validator");
const Condidat = require("../models/Condidat");
const { check, validationResult } = require("express-validator");
const authSecretaire = require("../middleware/authUser");
const User = require("../models/User");

//Register Condidat

router.post(
  "/",
  [
    authUser,
    [
      check("nom", "SVP tapez nom du condidat").not().isEmpty(),
      check("prenom", "SVP tapez prénom du candidat").not().isEmpty(),
      check("nomMari", "SVP tapez nom du mari").not().isEmpty(),
      check("cin", "SVP tapez numéro du CIN de condidat")
        .not()
        .isEmpty()
        .isLength({ max: 8 }),
      check("datecin", " tapez date de sortie de CIN de condidat")
        .not()
        .isEmpty(),
      check("tel", "SVP tapez num de téléphone")
        .not()
        .isEmpty()
        .isLength({ max: 8 }),
      check("dateNaissance", " SVP tapez date de naissance").not().isEmpty(),
      check("lieu", "SVP tapez lieu de naissance").not().isEmpty(),
      check("adresse", "SVP tapez adresse du candidat").not().isEmpty(),
    ],
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);

    const {
      nom,
      prenom,
      nomMari,
      cin,
      datecin,
      tel,
      dateNaissance,
      lieu,
      adresse,
    } = req.body;
    Condidat.findOne({ cin }).then((condidat) => {
      if (condidat) {
        res.status(400).json({ msg: "Condidat exists!!" });
      } else {
        condidat = new condidat({
          nom,
          prenom,
          nomMari,
          cin,
          datecin,
          tel,
          dateNaissance,
          lieu,
          adresse,
        });
        User.findById(req.secretaire.id).then((secretaire) => {
          user.condidat.push(condidat);
          condidat.secretaire = user;
          condidat.save().then((data) => res.json(data));
          user.save();
        });
      }
    });
    router.get("/:id", (req, res) => {
      Condidat.findById(req.params.id)
        .then((condidat) => res.json(condidat))
        .catch((err) => {
          console.error(err.message);
          res.status(500).send("erreur du serveur");
        });
    });
  }
);

//update Condidat
router.put("/:id", authInfermier, (req, res) => {
  const {
    nom,
    prenom,
    nomMari,
    cin,
    datecin,
    tel,
    dateNaissance,
    lieu,
    adresse,
  } = req.body;

  // Build a patient object
  let condidatFields = {};
  if (nom) condidatFields.nom = nom;
  if (prenom) condidatFields.prenom = prenom;
  if (nomMari) condidatFields.nomMari = nomMari;
  if (datecin) condidatFields.datecin = datecin;
  if (tel) condidatFields.phone = tel;
  if (dateNaissance) condidatFields.dateNaissance = dateNaissance;
  if (cin) condidatFields.cin = cin;
  if (lieu) condidatFields.lieu = lieu;
  if (adresse) condidatFields.adresse = adresse;

  Condidat.findById(req.params.id)
    .then((condidat) => {
      if (!condidat) {
        return res.status(404).json({ msg: "condidat not found" });
      } else {
        Condidat.findByIdAndUpdate(
          req.params.id,
          { $set: condidatFields },
          (err, data) => {
            res.json({ msg: "condidat Updated!" });
          }
        );
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server error");
    });
});
//   //get all patient
// router.get("/sec/:id", authInfermier, (req, res) => {
//     Condidat.find()
//       .populate("patient")
//       .sort({ date: -1 })
//       .then((patient) => res.json(patient))
//       .catch((err) => {
//         console.error(err.message);
//         res.status(500).send("Server Error");
//       });
//   });
//   //get one patient
//   router.get("/:id", authInfermier, (req, res) => {
//     Patient.findById(req.params.id)
//       .then((patient) => res.json(patient))
//       .catch((err) => {
//         console.error(err.message);
//       });
//   });
module.exports = router;
