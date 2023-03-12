require('dotenv').config();
const { spec, expect,request, assert, faker } = require('../config');
const getPostsSchema = require('../data/response/get-posts-schema.json');

describe('CREATE Posts Feature', () => {
	before(async () => {
		request.setDefaultTimeout(10000);
	});

	it('should be able to create a post', async () => {
		const requestBody = {
			title: faker.word.noun(),
			body: faker.lorem.paragraph(),
		};

		const resp = await spec()
			.post(`${process.env.PROD_URL}/posts`)
			.withHeaders('Content-Type', 'application/json')
			.withBody(requestBody)
			.expectStatus(201)
			.expectJsonLike('title', requestBody.title)
			.expectJsonLike('body', requestBody.body)
			.expectJsonLike('id', /\d+/);

		expect(resp.body.body).to.eql(requestBody.body);
		expect(resp.body.title).to.eql(requestBody.title);
	});
});
