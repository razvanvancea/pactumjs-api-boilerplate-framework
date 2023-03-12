require('dotenv').config();
const { spec, expect,request, assert } = require('../config');
const getPostsSchema = require('../data/response/get-posts-schema.json');
const { createPost } = require('../utils/create-post');

describe('DELETE Posts Feature', () => {
	let postId;

	before(async () => {
		request.setDefaultTimeout(10000);
	});

	beforeEach(async () => {
		postId = await createPost();
	})

	it('should delete post by ID', async () => {
		const resp = await spec()
			.delete(`${process.env.PROD_URL}/posts/${postId}`)
			.expectStatus(200);
	});
});
