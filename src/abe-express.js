var request = require('supertest'),
    expect = require('expect.js'),
    expressMockCheck = function (app, mock, example, done) {
        var exampleMock = mock.examples[example],
            method = mock.method.toLowerCase(),
            mockBody = exampleMock.request.body;

        request(app)
            [method](exampleMock.request.url)
            .send(mockBody)
            .end(function (err, res) {
                var body = res.text,
                    type = exampleMock.response.headers['Content-Type'];

                if (type === 'application/json') {
                    body = JSON.parse(res.text);
                }

                expect(res.statusCode).to.be(exampleMock.response.status);
                expect(res.headers['content-type']).to.contain(type);
                expect(body).to.eql(exampleMock.response.body);

                done();
            });
    };

module.exports = expressMockCheck;
