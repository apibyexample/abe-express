[![Build Status](http://img.shields.io/travis/apibyexample/abe-node-express/master.svg)](https://travis-ci.org/apibyexample/abe-node-express)
[![Dependency Status](https://david-dm.org/apibyexample/abe-node-express/dev-status.svg)](https://david-dm.org/apibyexample/abe-node-express#info=devDependencies)
[![devDependency Status](https://david-dm.org/apibyexample/abe-node-express/status.svg)](https://david-dm.org/apibyexample/abe-node-express#info=dependencies)
[![Monthly downloads](http://img.shields.io/npm/dm/abe-node-express.svg)](https://www.npmjs.org/package/abe-node-express)
[![License](http://img.shields.io/npm/l/abe-node-express.svg)](https://www.npmjs.org/package/abe-node-express)

API By Example helper for Express
=================================

This repository includes tools to be able to use the [ABE format](https://github.com/apibyexample/abe-spec)
with a [Node.js](http://nodejs.org/) [Express](http://expressjs.com/) server. In particular we aim to support
the testing of API routes to check that the responses match those expected created mocks which follow the ABE format.

## Installing

``npm install abe-node-express --save-dev``

## Usage

In order to use ``abe-node-expresss`` you will use this within your current testing setup

```js
var abeExpress = require('abe-node-express');
abeExpress(app, mock, example, done);
```

### App

This will be your Express app in which the route has been attached to in which you want to test.

### Mock

This will be the full ``ABE-Spec`` mock in which you are wanting to test against.

### Example

This is the ``key`` which the ``examples`` object of your mock.

### Done

This is the function which your testing system will pass within a ``it`` test, to tell your test that it has completed.

Example:

```js
it('should pass', function (done) {
    abeExpress(app, mock, example, done);
});
```

It is expected that you pre-load your mock file previously to be able to pass it to the helper
