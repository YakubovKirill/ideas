const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))

app.get('/', (req, res) => {})

app.post('/login', (req, res) => {
    const userName = req.body.userName
    const password = req.body.password

    const responseMessage = {
        status: 'ok',
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

app.listen(3001, () => {
    console.log('listen server 3001')
})