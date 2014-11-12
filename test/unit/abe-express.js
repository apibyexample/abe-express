var expect = require('expect.js'),
    abeExpress = require('../../libs/abe-express.js');

describe('ABE Express response test helper', function () {
    it('Should be able to test the headers or body', function () {
        expect(abeExpress.full).to.be.a('function');
        expect(abeExpress.header).to.be.a('function');
    });
});
