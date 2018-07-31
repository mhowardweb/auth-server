// definition of a user for mongoose to use
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true }, // make sure email is unique and save as lowercase
  password: String
});

// Create the model class
// tell mongoose about the model class user
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
