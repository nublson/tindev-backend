const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const routes = require('./routes')
const port = process.env.PORT || 3333
const dbUrl = process.env.MONGO_URL

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(routes)

app.listen(port, () => console.log(`Port ${port} is open.`))
