[![Build Status](http://img.shields.io/travis/apibyexample/abe-express/master.svg)](https://travis-ci.org/apibyexample/abe-express)
[![Dependency Status](https://david-dm.org/apibyexample/abe-express/status.svg)](https://david-dm.org/apibyexample/abe-express#info=dependencies)
[![devDependency Status](https://david-dm.org/apibyexample/abe-express/dev-status.svg)](https://david-dm.org/apibyexample/abe-express#info=devDependencies)
[![Monthly downloads](http://img.shields.io/npm/dm/abe-express.svg)](https://www.npmjs.org/package/abe-express)
[![License](http://img.shields.io/npm/l/abe-express.svg)](https://www.npmjs.org/package/abe-express)

API By Example helper for Express
=================================

This repository includes tools to be able to use the [ABE format](https://github.com/apibyexample/abe-spec)
with a [Node.js](http://nodejs.org/) [Express](http://expressjs.com/) server. In particular we aim to support
the testing of API routes to check that the responses match those expected created mocks which follow the ABE format.

## Installing

``npm install abe-express --save-dev``

## Usage

In order to use ``abe-express`` you will use this within your current testing setup

### Header test

This is a helper which will run a test against your API ensuring that the header response matches that of your mock. In order to do this, it will match the ``status`` code of your mock, it will also test the expected ``Content-type`` matches (this is only done if your mock contains the ``Content-type`` in it's headers).

```js
var abeExpress = require('abe-express'),
    myApp = require('../app.js'),
    mock = require('../mocks/example.json'),
    example = 'OK';

it('Should return a 200 status code', function (done) {
    abeExpress.header(myApp, mock, example, done);
});
```
### Full test

This is a helper which will run all tests against your API, ensuring that the body response of your API matches that of your mock. It will also run the tests against the ``header``.

```js
var abeExpress = require('abe-express'),
    myApp = require('../app.js'),
    mock = require('../mocks/example.json'),
    example = 'OK';

it('Should return a 200 status code and body', function (done) {
    abeExpress.full(myApp, mock, example, done);
});
```
### Params

#### App

This will be your Express app in which the route has been attached to in which you want to test.

#### Mock

This will be the full ``ABE-Spec`` mock in which you are wanting to test against.

#### Example

This is the ``key`` within the ``examples`` object of your mock.

#### Done

This is the function which your testing system will pass within a ``it`` test, to tell your test that it has completed.
