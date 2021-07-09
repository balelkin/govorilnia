const express = require('express');
const controller = require('../controllers/user.controllers')
const router = express.Router();


router.get('/', controller.users)
router.get('/:id', controller.getUserById)
router.post('/', controller.createUsers)
router.delete('/:id', controller.deleteUserById)
router.patch('/:id', controller.updateUserById)
router.post('/joinroom', controller.joinRoom)
router.post('/leavefromroom', controller.leaveFromRoom)
router.get('/room/:roomId', controller.getUsersFromRoom)
module.exports = router 