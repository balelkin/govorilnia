const { users } = require('../controllers/user.controllers')
const { findByIdAndDelete, findByIdAndUpdate } = require('../models/room.model')
const rooms = require('../models/room.model')

exports.rooms = async ()=>{
    return rooms.find({})
    .limit(10)
    .populete('ownerId')
    .lean()
}
exports.getById = async (id)=> {
    return rooms.findById(id).lean()
}
exports.createRoom = async (body)=>{
    return rooms.create(body)
}

exports.delRoom = async (id) => {
    return findByIdAndDelete(id).lean()
}
exports.updateRoom = async (id) =>{
    return findByIdAndUpdate(id).lean()
}

exports.joinUserToRoom = async (roomId, userId) =>{
    return rooms.findByIdAndUpdate(roomId, { $push: { userId }}, { new:true })
}
exports.leaveUserFromId = async (roomId, userId) =>{
    return rooms.findByIdAndUpdate(roomId, { $pull: { userId }}, { new:true })
}
exports.getAllRoomsByUser = async(userId) =>{
    return rooms.find({ownerId: userId}).populete(users)
}