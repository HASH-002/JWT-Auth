const express = require('express')
const createError = require('http-errors')
const morgan = require('morgan') 
const { port } = require('./config')
var authRoute = require('./routes/auth')
require('./configs/dbconfig')

const app = express()
app.use(morgan('dev'))

app.use('/auth', authRoute)

// Error Handlers
app.use( async (req, res, next)=> {
    next(createError.NotFound()) // passing error as first parameter
})

app.use((err,req,res,next)=>{
    res.status = err.status || 500
    res.send({
        error:{
            success: false,
            status: err.status || 500, // error object does not show status so we need to make that field
            message: err.message
        }
    })  
})

const PORT = port || 5000
app.listen(PORT, () => {
    console.log(`App running in PORT ${PORT}`)
})