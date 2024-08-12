const mongoose = require('mongoose');
require('dotenv').config();
const Person = require('./models/Person');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Example: Create and save a person
const createPerson = async () => {
  const person = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Pasta']
  });

  try {
    const savedPerson = await person.save();
    console.log('Person saved:', savedPerson);
  } catch (err) {
    console.error('Error saving person:', err);
  }
};

createPerson();
