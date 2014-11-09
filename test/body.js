var path = require('path'),
    expect = require('expect.js'),
    bodyLib = path.join('../libs/body.js'),
    exampleMock = {
        response: {}
    };

describe('Body check', function () {
    describe('JSON Body check', function () {
        it('Should pass with valid JSON', function () {
            var bodyTest,
                mockResponse = {
                    text: {
                        'first_name': 'Joe',
                        'last_name': 'Blogs'
                    }
                };

            exampleMock.response.body = {
                'first_name': 'Joe',
                'last_name': 'Blogs'
            };

            bodyTest = require(bodyLib)(exampleMock);

            expect(bodyTest).withArgs(null, mockResponse).to.not.throwException();
        });

        it('Should raise error with JSON not matching', function () {
            var bodyTest,
                mockResponse = {
                    text: {
                        'first_names': 'Joe',
                        'last_names': 'Blogs'
                    }
                };

            exampleMock.response.body = {
                'first_name': 'Joes',
                'last_name': 'Blogs'
            };

            bodyTest = require(bodyLib)(exampleMock);

            expect(bodyTest).withArgs(null, mockResponse).to.throwException(function (e) {
                expect(e.toString()).to.contain('Error: expected');
            });
        });
    });

    describe('String checks', function () {
        it('Should pass when strings match', function () {
            var bodyTest,
                mockResponse = {
                    text: 'Some text'
                };

            exampleMock.response.body = 'Some text';
            bodyTest = require(bodyLib)(exampleMock);

            expect(bodyTest).withArgs(null, mockResponse).to.not.throwException();
        });

        it('Should raise error when Strings don\'t match', function () {
            var bodyTest,
                mockResponse = {
                    text: 'Some text'
                };

            exampleMock.response.body = 'Different text';
            bodyTest = require(bodyLib)(exampleMock);

            expect(bodyTest).withArgs(null, mockResponse).to.throwException(function (e) {
                expect(e.toString()).to.contain('Error: expected');
            });
        });
    });

    describe('Array checks', function () {
        it('Should pass when arrays match', function () {
            var bodyTest,
                mockResponse = {
                    text: ['Some', 'Date', 0]
                };

            exampleMock.response.body = ['Some', 'Date', 0];
            bodyTest = require(bodyLib)(exampleMock);

            expect(bodyTest).withArgs(null, mockResponse).to.not.throwException();
        });

        it('Should raise error when Arrays don\'t match', function () {
            var bodyTest,
                mockResponse = {
                    text: ['Some', 'Date', 0]
                };

            exampleMock.response.body = ['Some', 'Different', 2];
            bodyTest = require(bodyLib)(exampleMock);

            expect(bodyTest).withArgs(null, mockResponse).to.throwException(function (e) {
                expect(e.toString()).to.contain('Error: expected');
            });
        });
    });
});
