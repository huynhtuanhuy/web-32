const postModel = require('../models/post');

function create(post) {
    return postModel.create(post);
}

function getList() {
    return postModel.find({}).populate('author');
}

function getById(postId) {
    return postModel.findById(postId);
}

function update(postId, updateData) {
    return postModel.findByIdAndUpdate(postId, updateData);
}

function remove(postId) {
    return postModel.findByIdAndRemove(postId);
}

module.exports = {
    create,
    getList,
    getById,
    update,
    remove,
}