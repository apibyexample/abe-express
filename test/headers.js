var expect = require('expect.js'),
    exampleMock = {
        response: {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };

describe('Header check', function () {

    it('should raise that status code doesn\'t match', function (done) {
        var headerTest = require('../libs/headers.js')(exampleMock),
            mockResposne = {
                statusCode: 300,
                headers: {
                    'content-type': 'application/json'
                }
            };

        try {
            headerTest(null, mockResposne);
        } catch (error) {
            expect(error.toString()).to.contain('300 to equal 200');
            done();
        }
    });

    it('should raise that the content-type doesn\'t match correctly', function (done) {
        var headerTest = require('../libs/headers.js')(exampleMock),
            mockResposne = {
                statusCode: 200,
                headers: {
                    'content-type': 'plain/text'
                }
            };

        try {
            headerTest(null, mockResposne);
        } catch (error) {
            expect(error.toString()).to.contain('\'plain/text\' to contain \'application/json\'');
            done();
        }
    });

});
