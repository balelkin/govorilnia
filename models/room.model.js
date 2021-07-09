const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: ""
    },
    ownerId: {
        ref: 'users',
        type: Schema.Types.ObjectId,
        default: null
    },
    description: {
        type: String,
        default: ""
    },
    usersId: {
     ref: 'users',
     type: [Schema.Types.ObjectId],
     default: null
     },
}, {
    versionKey: false,
    timestamps: true,
    collection: 'rooms'
})

module.exports = mongoose.model('rooms', roomSchema)