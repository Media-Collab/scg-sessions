const usersController = {};

usersController.getUsers = (req, res) => {
  res.json({
    method: "GET",
    route: "users",
  });
};

usersController.createUser = (req, res) => {
  res.json({
    method: "POST",
    route: "users",
    message: "User created",
  });
};

usersController.deleteUser = (req, res) => {
  res.json({
    method: "Delete",
    route: "users",
    message: "User deleted",
  });
};

module.exports = usersController;
