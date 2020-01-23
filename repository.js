var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    name: String
});

var User = mongoose.model('MyUser', usersSchema);

const getUsers = (search) => {
    if (!search) {
        return User.find()
    } else {
        return User.find({ name: new RegExp(search) })
    }
}

const getUser = (id) => {
    return User.find({ _id: id })
}

const updateUser = (id, name) => {
    return User.update({ _id: id, }, { name: name })
}

const addUser = async (name) => {
    const user = new User({ name });
    return user.save()
}

const deleteUser = (id) => {
    return User.deleteOne({ _id: id });
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;