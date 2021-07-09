const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        roomId: {
            ref: 'rooms',
            type: Schema.Types.ObjectId,
            default: null
        }
        
}, {
    versionKey: false,
    timestamps: true,
    collection: 'users'
})

module.exports = mongoose.model('users', userSchema)