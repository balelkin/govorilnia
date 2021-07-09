const mongoose = require('mongoose')
const port = 4200;
const PID = process.pid
const app = require('./app')
require('./core/mongoose')
require('./models/user.model')

app.listen(port, ()=>{
console.log(`Server started on port: ${port}, and PID: ${PID}`);
})

