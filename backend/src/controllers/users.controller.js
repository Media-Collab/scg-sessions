const usersController = {};

const UserModel = require("../models/User.model");

usersController.getUsers = async (req, res) => {
  const users = await UserModel.find();

  res.json(users);
};

usersController.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new UserModel({ username });
  await newUser.save();

  res.json({
    message: "User created",
  });
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.body;
  await UserModel.findOneAndDelete(id);

  res.json({
    message: "User deleted",
  });
};

module.exports = usersController;
