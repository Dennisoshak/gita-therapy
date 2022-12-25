const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const createToken = (id) => {
  return jwt.sign({ _id: id }, secret, { expiresIn: "2d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const signUpUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { signUpUser, loginUser };
