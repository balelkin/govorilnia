const express = require('express');
const controller = require('../controllers/message.controllers')
const router = express.Router();


router.get('/', controller.listMessages)
router.get('/:id', controller.getMessageById);
router.post('/', controller.createMessage);
router.delete('/:id', controller.deleteMessageById);
router.patch('/:id', controller.updateMessageById);
router.get('/byuser/:userId', controller.getAllMessagesByUser);
router.get('/byroom/:roomId', controller.getAllMessagesByRoom);

module.exports = router 