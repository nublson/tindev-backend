const express = require('express')
const mongoose = require('mongoose')

require('dotenv/config')

const app = express()
const port = process.env.PORT || 3001

const databaseUrl = process.env.MONGO_URL
mongoose.connect(`${databaseUrl}`, { useNewUrlParser: true })

app.use(require('./routes'))

app.listen(port, () => console.log(`Port ${port} is open!`))
