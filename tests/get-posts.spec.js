const { spec, expect, request, assert } = require('../config');
const getPostsSchema = require('../data/response/get-posts-schema.json');

let baseUrl = `${process.env.BASE_URL}`;

describe('GET Posts Feature', () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it('should get all posts', async () => {
    const resp = await spec()
      .get(`${baseUrl}/posts`)
      .expectStatus(200)
      .expectJsonSchema(getPostsSchema);
    assert.isArray(resp.body);
  });
});
