import CONFIG from "../config";

const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [CONFIG.client],
    methods: ['GET', 'POST'],
    credentials: true
}))

app.get('/', (req, res) => {})

app.listen(CONFIG.serverPort, () => {
    console.log('listen server ' + CONFIG.serverPort)
})