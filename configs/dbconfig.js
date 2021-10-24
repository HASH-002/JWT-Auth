const mongoose = require('mongoose')
const { mongodb_uri, db_name } = require('../config')

mongoose.connect(mongodb_uri, {
    dbName: db_name
}).then(() => {
    console.log("Mongo connected :)")
}).catch(err => console.log(err.message))

// Getting log messages at certain points
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db')
})

mongoose.connection.on('error', (err) => {
    console.log(err.message)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected.')
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
})