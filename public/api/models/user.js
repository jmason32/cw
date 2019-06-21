const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    username: { type: String, unique: true },
    password: { type: String },
    firstname: String,
    lastname: String
});

var User = mongoose.model('users', userSchema);
module.exports = User;