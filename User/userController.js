const mongoose = require("mongoose");
const User = require("./User");

const createUser = (req, res) => {
    const user = new User(req.body);
    
    user.save()
    .then(user => {
      res.status(200).json({ message: 'user saved!'});
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
}

module.exports = {
    createUser,
}
