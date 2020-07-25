const Users = require('../models/taskModels');
const userController = {};

// add a user
userController.addUser = (req, res, next) => {
  const newData = Users.create({
    firstName: 'a',
    lastName: 'a',
    username: 'a',
    password: 'a',
  }).then((data) => {
    console.log('-----data:', data);
    res.locals.newUser = data;
    next();
  });
};
//get all users
userController.getAllUsers = (req, res, next) => {};

module.exports = userController;
