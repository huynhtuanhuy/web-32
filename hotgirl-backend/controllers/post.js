const postModel = require('../models/post');

function create(post) {
    return postModel.create(post);
}

function getList() {
    return postModel.find({}, {
        'author': 1,
        'active': 1,
        'image': 1,
        'title': 1,
        'content': 1,
        'createdAt': 1,
    })
        .populate(
            'author',
            {
                'name': 1,
                'username': 1,
            }
        )
        .populate('active');
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