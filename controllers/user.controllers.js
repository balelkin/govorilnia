const User = require('../models/user.model')
const userService = require('../service/user.service')
module.exports.users = async (req, res)=> {
    const users = await userService.listUsers()
    res.status(200).json(users)
}

module.exports.getUserById = async ({params: {id}}, res) => {
    const users = await userService.getById(id)
    res.status(200).json(users)
}
exports.createUsers = async ({body}, res)=> {
    const users = await userService.createUsers(body)
    res.status(200).json(users)
}
exports.deleteUserById = async ({params: {id}}, res) => {
    await userService.deleteUser(id)
    res.status(200).redirect('/users')
}
exports.updateUserById = async ({params: {id}}, res) => {
    const users = await userService.updateUser(id);
    res.status(200).json(users);
};

module.exports.joinRoom = async ({body: {userId, roomId}}, res) =>{
    const oldRoom = await userService.joinRoom(userId, roomId)
    if (oldRoom !== null){
        await leaveUserFromRoom(oldRoom, roomId); 
    }
    await joinRoom(roomId, userId)
    res.status(200).redirect(`users/${userId}`)
};

exports.leaveFromRoom = async ({body: {userId, roomId}}, res) =>{
    await userService.leaveFromRoom(userId);
    await leaveUserFromRoom(roomId, userId);
    res.status(200).redirect(`users/${userId}`)
}
exports.getUsersFromRoom = async ({params: {roomId}}, res) =>{
    const users  = await userService.getUsersFromRoom(roomId)
    res.status(200).json(users)
}
