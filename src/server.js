const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv/config') //? To access the environment variables from ".env" file

const app = express() //! Start app
app.use(cors()) //* Permit cors
const port = process.env.PORT || 3333 //* Local and Heroku port

app.use(express.json()) //* Permit json req

const databaseUrl = process.env.MONGO_URL //* Access the Database Url from ".env"
mongoose.connect(`${databaseUrl}`, { useNewUrlParser: true }) //! Connect to DataBase

app.use(require('./routes')) //* Acess the routes

app.listen(port, () => console.log(`Port ${port} is open!`)) //* Listen port
