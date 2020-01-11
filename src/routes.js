const routes = require('express').Router()
const DevController = require('./Controllers/DevController')

routes.post('/', DevController.store)

module.exports = routes
