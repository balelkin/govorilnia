const messageService = require('../service/message.service')

exports.listMessages = async (req, res) => {
    const messages = await messageService.list();
    res.status(200).json(messages);
};

exports.getMessageById = async ({params: {id}}, res) => {
    const message = await messageService.getById(id);
    res.status(200).json(message);
};

exports.createMessage = async ({body}, res) => {
    const message = await messageService.createMessage(body);
    res.status(200).json(message);
};

exports.deleteMessageById = async ({params: {id}}, res) => {
    await messageService.deleteMessage(id);
    res.redirect('/messages');
};

exports.updateMessageById = async ({params: {id}}, res) => {
    const message = await messageService.updateMessage(id);
    res.status(200).json(message);
};

exports.getAllMessagesByUser = async ({params: {userId}}, res) => {
    const messages = await messageService.getAllMessagesByUser(userId);
    res.status(200).json(messages);
};

exports.getAllMessagesByRoom = async ({params: {roomId}}, res) => {
    const messages = await messageService.getAllMessagesByRoom(roomId);
    res.status(200).json(messages);
};