const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const userRout = require('./routes/user.routes');
const roomRout = require('./routes/room.routes');
const messageRout = require('./routes/message.routes');
const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/users', userRout)
app.use('/rooms', roomRout)
app.use('/messages', messageRout)

module.exports = app;