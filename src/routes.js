const express = require('express')
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router()

//! Routes
routes.get('/devs', DevController.index) //* List al Devs without likes and dislikes
routes.post('/devs', DevController.store) //* Create/signup Devs
routes.post('/devs/:devId/likes', LikeController.store) //* Like
routes.post('/devs/:devId/dislikes', DislikeController.store) //* Deslike

module.exports = routes
