const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => res.send('Tinder Clone'))

module.exports = routes
