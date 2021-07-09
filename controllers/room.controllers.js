const roomService = require('../service/room.service')

module.exports.rooms = async (req, res) => {
   const rooms = await roomService.rooms()
   res.status(200).json(rooms)
}
module.exports.getRoomById = async ({params: {id}}, res) => {
    const rooms = await roomService.getById(id)
    res.status(200).json(rooms)
}
exports.createRoom = async ({body}, res)=> {
    const rooms = await roomService.createRoom(body)
    res.status(200).json(rooms)
}
exports.deleteRoomById = async({params: {id}}, res) => {
    await deleteAllUsersFromRoom(id);
    await roomService.delRoom(id);
    res.redirect('/rooms');
};

exports.updateRoomById = async({params: {id}}, res) => {
    const room = await roomServices.updateRoom(id);
    res.status(200).json(room);
};

exports.getAllRoomsByUser = async({params: {userId}}, res) => {
    const rooms = await roomServices.getAllRoomsByUser(userId);
    res.status(200).json(rooms);
};