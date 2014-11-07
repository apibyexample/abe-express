var expect = require('expect.js');

module.exports = function (mock, done) {
    return function (err, res) {
        var body = res.text,
            type = exampleMock.response.headers['Content-Type'];

        if (type === 'application/json') {
            body = JSON.parse(res.text);
        }

        expect(body).to.eql(mock.response.body);

        if (typeof done === 'function') {
            done();
        }
    };
};
