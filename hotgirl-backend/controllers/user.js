const userModel = require('../models/user');

function create(user) {
    return userModel.create(user);
}

function getList() {
    return userModel.find({});
}

function getById(userId) {
    return userModel.findById(userId);
}

function update(userId, updateData) {
    return userModel.findByIdAndUpdate(userId, updateData);
}

function remove(userId) {
    return userModel.findByIdAndRemove(userId);
}

module.exports = {
    update,
    remove,
    create,
    getList,
    getById,
}