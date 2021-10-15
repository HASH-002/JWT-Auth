const express = require('express')
const morgan = require('morgan')
const createError =require('http-errors')

require('dotenv').config()
require('./helpers/init_mongodb')

const authRoute = require('./routes/auth')

const app = express()
app.use(morgan('dev')) // just after initialising app in development mode
app.use(express.json()) // To parse incoming json data
app.use(express.urlencoded({extended: true})) // To parse incoming form data  

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/auth', authRoute)

// If route not present
app.use((req,res,next)=>{
    // const error = new Error("Not Found");
    // error.status = 404
    // next(error)
    next(createError.NotFound())
})

// Every error will be redirected to here from auth.js too using next() middleware
app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})