require('dotenv').config();
const { spec, expect, request, assert } = require('../config');
const getCommentResponseSchema = require('../data/response/get-comment-schema.json');

describe('Comments Feature', () => {
	before(async () => {
		request.setDefaultTimeout(10000);
	});

	it('should get comment by ID', async () => {
		const resp = await spec()
			.get(`${process.env.PROD_URL}/comments/1`)
			.expectStatus(200)
			.expectJsonSchema(getCommentResponseSchema);
		// assert.isArray(resp.body);
	});
});
