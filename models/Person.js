const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String] // Array of strings
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
