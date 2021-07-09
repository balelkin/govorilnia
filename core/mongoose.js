require('dotenv').config()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const database = 'govorilnia'
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
   })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
console.log(`Connection base of "${database.toUpperCase()}" `);
})
