const express = require('express');
const controller = require('../controllers/room.controllers')
const router = express.Router();


router.get('/', controller.rooms)
router.get('/:id', controller.getRoomById)
router.post('/', controller.createRoom)
router.delete('/:id', controller.deleteRoomById);
router.patch('/:id', controller.updateRoomById);
router.get('/user/:userId', controller.getAllRoomsByUser);
module.exports = router 