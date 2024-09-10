const { ConnectionStates } = require("mongoose");
const Pet = require("../models/pet_model.js");

const store = async (req, res) => {
  await  Pet.create(req.body);
  res.json();
};

const index = async (req, res) => {
  const content = Pet.find().exec();
  res.json(content);
};

const show = async (req, res) => {
  const content = Pet.finById(req.params.id).exec();
  res.json(content);
};

const update = async (req, res) => {
  await Pet.findByIdAndUpdate(req.params.id, req.body).exec();
  res.json();
};

const destroy = async (req, res) => {
  await Pet.findByIdAndDelete(req.params.id).exec();
  res.json();
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
