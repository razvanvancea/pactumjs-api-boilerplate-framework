require('dotenv').config()
const { spec, faker } = require('../config');

// create new Post and returns its ID

async function createPost() {
const requestBody = {
			title: 'random',
			body: faker.lorem.paragraph(),
		};

		const resp = await spec()
			.post(`${process.env.PROD_URL}/posts`)
			.withHeaders('Content-Type', 'application/json')
			.withBody(requestBody)
			.expectStatus(201);
		return resp.body.id;
}

module.exports = {
  createPost
}
