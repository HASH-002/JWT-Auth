const express = require('express')
const createError = require('http-errors')
const { port } = require('./config')

const app = express()

const PORT = port || 5000

app.get('/', async (req, res, next)=> {
    res.send('Hello World')
})

app.use( async (req, res, next)=> {
    next(createError.NotFound()) // passing error as first parameter
})

app.use((err,req,res,next)=>{
    res.status = err.status || 500
    res.send({
        error:{
            status: err.status || 500, // error object does not show status so we need to make that field
            message: err.message
        }
    })  
})

app.listen(PORT, () => {
    console.log(`App running in PORT ${PORT}`)
})