const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv/config')

const app = express()
app.use(cors())
const port = process.env.PORT || 3333

app.use(express.json())

const databaseUrl = process.env.MONGO_URL
mongoose.connect(`${databaseUrl}`, { useNewUrlParser: true })

app.use(require('./routes'))

app.listen(port, () => console.log(`Port ${port} is open!`))
