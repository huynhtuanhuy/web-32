const activeModel = require('../models/active');

function create(active) {
    return activeModel.create(active);
}

function getList() {
    return activeModel.find({});
}

function getById(activeId) {
    return activeModel.findById(activeId);
}

function update(activeId, updateData) {
    return activeModel.findByIdAndUpdate(activeId, updateData);
}

function remove(activeId) {
    return activeModel.findByIdAndRemove(activeId);
}

module.exports = {
    create,
    getList,
    getById,
    update,
    remove,
}