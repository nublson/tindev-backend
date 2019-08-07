const axios = require('axios')

const Dev = require('../models/Dev')

module.exports = {
	async index(req, res) {
		//? List Controller
		const { user } = req.headers //* Access the user from header

		const loggedDev = await Dev.findById(user) //* Find loggedUser

		const users = await Dev.find({
			//? Filter
			$and: [
				{ _id: { $ne: user } }, //TODO users that is not me
				{ _id: { $nin: loggedDev.likes } }, //TODO users that don't like yet
				{ _id: { $nin: loggedDev.dislikes } } //TODO users that don't dislike yet
			]
		})

		return res.json(users)
	},

	async store(req, res) {
		const { username } = req.body //? username

		const userExists = await Dev.findOne({ user: username }) //* Find the username

		if (userExists) {
			//* Look if user already exists
			return res.json(userExists) //* if yes, login
		}

		const response = await axios.get(`https://api.github.com/users/${username}`) //* Fetch data from the Github API with AXIOS

		const { name, bio, avatar_url: avatar } = response.data //* get the name, bio and avatar from the Github API

		const dev = await Dev.create({
			//* Create a new user with the response from the api fetched
			name,
			user: username,
			bio,
			avatar
		})

		return res.json(dev)
	}
}
