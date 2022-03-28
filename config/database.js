const mongoose = require('mongoose')

const connectToDatabase = () => {
  mongoose.connect(process.env.DATABASE_URL, (err, db) => {
    if (err) {
      console.log('Error occurred while connecting to database', err.message)
    } else {
      console.log('Connected to database')
    }
  })
  
}

module.exports = connectToDatabase