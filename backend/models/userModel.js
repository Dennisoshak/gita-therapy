const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: false,
  },
});

userSchema.statics.signup = async function (name, email, password) {
  if (!email || !password || !name) {
    throw Error("All fields are required");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (password.length < 6) {
    throw Error("Password must contain at least 6 characters");
  }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error("Password not strong enough");
  // }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("All fields are required");
  const user = await this.findOne({ email });
  if (!user) throw Error("Incorrect email");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error("Incorrect password");
  console.log("now", user);
  return user;
};

module.exports = mongoose.model("User", userSchema);
