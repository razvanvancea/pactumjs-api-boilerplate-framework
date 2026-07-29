const { spec, expect, request, assert } = require('../config');
const getCommentResponseSchema = require('../data/response/get-comment-schema.json');

let baseUrl = `${process.env.BASE_URL}`;

describe('Comments Feature', () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it('should get comment by ID', async () => {
    const resp = await spec()
      .get(`${baseUrl}/comments/1`)
      .expectStatus(200)
      .expectJsonSchema(getCommentResponseSchema);
  });
});
