const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const todoRoute = require('./routes/todoRoute')
const connectToDatabase = require('./config/database')
const cors = require('cors')
require('dotenv').config()

connectToDatabase()
app.use(cors())
app.use(express.json())

app.use('/api/todos', todoRoute)

app.listen(port, () => console.log('Server running on port: ', port))