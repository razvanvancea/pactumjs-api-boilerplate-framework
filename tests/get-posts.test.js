require('dotenv').config();
const { spec, request } = require('pactum');
const { it } = require('mocha');
const getPostsSchema = require('../data/response/get-posts-schema.json');

const expect = require('chai').expect;
const { assert } = require('chai');

describe('GET Posts Feature', () => {
	before(async () => {
		request.setDefaultTimeout(10000);
	});

	it('should get all posts', async () => {
		const resp = await spec()
			.get(`${process.env.PROD_URL}/posts`)
			.expectStatus(200)
			.expectJsonSchema(getPostsSchema);
		assert.isArray(resp.body);
	});
});
