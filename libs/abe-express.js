var request = require('supertest'),
    expect = require('expect.js'),
    expressMockCheck = {
        full: function (app, mock, example, done) {
            var exampleMock = mock.examples[example],
                mockBody = exampleMock.request.body,
                testHeaders = require('./headers.js')(exampleMock),
                testBody = require('./body.js')(exampleMock, done);

            request(app)
                [mock.method.toLowerCase()](exampleMock.request.url)
                .send(mockBody)
                .end(function (err, res) {
                    testHeaders(err, res);
                    testBody(err, res);
                });
        },
        header: function (app, mock, example, done) {
            var exampleMock = mock.examples[example],
                mockBody = exampleMock.request.body,
                testHeaders = require('./headers.js')(exampleMock, done);

            request(app)
                [mock.method.toLowerCase()](exampleMock.request.url)
                .send(mockBody)
                .end(testHeaders);
        }
    };

module.exports = expressMockCheck;
