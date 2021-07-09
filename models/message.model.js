const mongoose = require('mongoose')
const Schema = mongoose.Schema


const messageSchema = new Schema({
    ownerId: {
        ref: 'users',
        type: Schema.Types.ObjectId,
        required: true,
    },
    roomId: {
        ref: 'rooms',
        type: Schema.Types.ObjectId,
        default: null
    },
    text: {
        type: String,
        default: ""
    },
}, 
{
    versionKey: false,
    timestamps: true,
    collection: 'messages'
})

module.exports = mongoose.model('messages', messageSchema)