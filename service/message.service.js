const messages = require('../models/message.model');

exports.list = async() => {
    return messages.find({})
    .limit(10)
    .populate('userId')
    .populate('roomId')
    .lean();
};

exports.getById = async(id) => {
    return messages.findById(id)
    .lean();
};

exports.createMessage = async(body) => {
    return messages.create(body);
};

exports.deleteMessage = async(id) => {
    return messages.findByIdAndDelete(id)
    .lean();
};

exports.updateMessage = async(id) => {
    return messages.findByIdAndUpdate(id)
    .lean();
};

exports.getAllMessagesByUser = async(userId) => {
    return messages.find({ownerId: userId})
    .populate('user')
    .limit(10);
};

exports.getAllMessagesByRoom = async(roomId) => {
    return messages.find({roomId})
    .populate('rooms')
    .limit(10);
};