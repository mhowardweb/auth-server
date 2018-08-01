// definition of a user for mongoose to use
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true }, // make sure email is unique and save as lowercase
  password: String
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this; 

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password (salt + hashed password)
      user.password = hash;
      next();
    });
  });
});

// Create the model class
// tell mongoose about the model class user
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
