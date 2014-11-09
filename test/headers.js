var path = require('path'),
    expect = require('expect.js'),
    headerLib = path.join('../libs/headers.js'),
    exampleMock = {
        response: {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };

describe('Header check', function () {
    it('should raise that status code doesn\'t match', function () {
        var headerTest = require(headerLib)(exampleMock),
            mockResponse = {
                statusCode: 300,
                headers: {
                    'content-type': 'application/json'
                }
            };

        expect(headerTest).withArgs(null, mockResponse).to.throwException(function (e) {
            expect(e.toString()).to.contain('Error: expected');
        });
    });

    it('should raise that the content-type doesn\'t match correctly', function () {
        var headerTest = require(headerLib)(exampleMock),
            mockResponse = {
                statusCode: 200,
                headers: {
                    'content-type': 'plain/text'
                }
            };

        expect(headerTest).withArgs(null, mockResponse).to.throwException(function (e) {
            expect(e.toString()).to.contain('Error: expected');
        });
    });

    it('should raise no errors', function () {
        var headerTest = require(headerLib)(exampleMock),
            mockResponse = {
                statusCode: 200,
                headers: {
                    'content-type': 'application/json'
                }
            };

        expect(headerTest).withArgs(null, mockResponse).to.not.throwException();
    });

});
