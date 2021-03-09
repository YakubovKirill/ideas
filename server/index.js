const express = require('express')
const CONFIG = require('../src/config')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const jwt = require('jsonwebtoken')

app.use(express.json())
app.use(cookieParser('ideaSecretCookies'))
app.use(cors({
    origin: [CONFIG.getClientPath()],
    methods: ['GET', 'POST'],
    credentials: true
}))

app.use(session({
    key: 'userID',
    secret: 'icube',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 86400
    }
}))

app.get('/', (req, res) => {})

app.get('/logout', (req, res) => {
    if (req.session.user) {
        req.session.destroy()
        res.send({loggedIn: false})
    }
    else res.send({loggedIn: true, user:{
        userName: req.session.user.userName
    }}) 
})

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: {
            userName: req.session.user.userName
        }})
    }
    else res.send({loggedIn: false}) 
})

app.post('/login', (req, res) => {
    const userName = req.body.userName
    const password = req.body.password
    
    const token = jwt.sign({
        userName: userName
    }, 'ideasSecret', {
        expiresIn: 300,
    })

    req.session.user = {userName: userName}

    const responseMessage = {
        status: 'ok',
        token: token,
        data: {
            userName: userName,
            password: password
        }
    }
    return res.send(responseMessage)
})

app.post('/register', (req, res) => {
    const userName = req.body.userName
    const password = req.body.password
    const email = req.body.email

    const responseMessage = {
        status: 'ok',
        data: {
            userName: userName,
            password: password,
            email: email
        }
    }
    return res.send(responseMessage)
})

app.post('/add/post', (req, res) => {
    const ideaHeader = req.body.ideaHeader
    const ideaText = req.body.ideaText
    const date = req.body.date

    const responseMessage = {
        status: 'ok',
        data: {
            ideaHeader: ideaHeader,
            ideaText: ideaText,
            date: date
        }
    }
    return res.send(responseMessage)
})

app.get('/get/ideas', (req, res) => {
    const responseMessage = {
        status: 'ok',
        data: {
            ideas: ['1', '2']
        }
    }

    return res.send(responseMessage)
})

app.listen(CONFIG.serverPort, () => {
    console.log('listen server ' + CONFIG.serverPort)
})