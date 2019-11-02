const postModel = require('../models/post');

function create(post) {
    return postModel.create(post);
}

function getList() {
    return postModel.find({});
}

function getById(postId) {
    return postModel.findById(postId);
}

module.exports = {
    create,
    getList,
    getById,
}