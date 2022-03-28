const express = require('express')
const app = express()
const PORT = 5000
const todoRoute = require('./routes/todoRoute')
const connectToDatabase = require('./config/database')
const cors = require('cors')
require('dotenv').config()

connectToDatabase()
app.use(cors())
app.use(express.json())

app.use('/api/todos', todoRoute)

app.listen(PORT, () => console.log('Server running on port: ', PORT))