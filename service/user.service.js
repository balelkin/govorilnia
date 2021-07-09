const users = require('../models/user.model')
const router = require('../routes/user.routes')

exports.listUsers = async () => {
    return users.find({}).limit(10).lean()
}
exports.getById = async (id)=> {
    return users.findById(id).lean()
}
exports.createUsers = async (body)=>{
    return users.create(body)
}
exports.deleteUser = async (id)=> {
    return users.findByIdAndDelete(id).lean()
}
exports.updateUser = async(id) => {
    return users.findByIdAndUpdate(id).lean();
};

module.exports.joinRoom = async (roomId, userId) =>{
    const user = await users.findById(userId)
    await users.findByIdAndUpdate(userId, {roomId}, {new: true})
    return user.roomId
}; 

exports.leaveFromRoom = async (userId) =>{
    return  users.findByIdAndUpdate(userId, {roomId: null}, {new: true}).lean()
}

exports.getAllUserRoom = async (roomId) => {
    return users.find({roomId}).populeta('room').limit(10)
}
exports.deleteUsersFromRoom = async (roomId) =>{
    return users.updateMany({roomId}, {roomId: null}, {new: true})
}