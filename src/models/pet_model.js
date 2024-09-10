const db = require("../db.js");

const Schema = db.Schema;

const petSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  raca: {
    type: String,
    required: false,
  },
});

const Pet = db.model("Pet", petSchema);

module.exports = Pet;
