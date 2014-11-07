var expect = require('expect.js');

module.exports = function (mock, done) {
    return function (err, res) {
        var type = mock.response.headers['Content-Type'];

        expect(res.statusCode).to.be(mock.response.status);
        expect(res.headers['content-type']).to.contain(type);

        if (typeof done === 'function') {
            done();
        }
    };
};
