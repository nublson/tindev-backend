const express = require('express')
const routes = require('./routes')

const port = process.env.PORT || 3333

const app = express()

app.use(routes)

app.listen(port, () => console.log(`Port ${port} is open.`))
