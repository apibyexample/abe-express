var expect = require('expect.js');

module.exports = function (mock, done) {
    return function (err, res) {
        var body = res.text;

        try {
            body = JSON.parse(res.text);
        } catch (error) {}

        expect(body).to.eql(mock.response.body);

        if (typeof done === 'function') {
            done();
        }
    };
};
