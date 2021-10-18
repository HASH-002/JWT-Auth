const express = require('express')
var router = express.Router()

router.post('/register', async (req, res)=> {
    try {
        res.send("Hello")
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res)=> {
    try {
        res.send("Hello")
    } catch (error) {
        next(error)
    }
})

router.post('/refreshToken', async (req, res)=> {
    try {
        res.send("Hello")
    } catch (error) {
        next(error)
    }
})

router.delete('/logout', async (req, res)=> {
    try {
        res.send("Hello")
    } catch (error) {
        next(error)
    }
})

module.exports = router