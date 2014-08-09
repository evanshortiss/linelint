'use strict';

var fs = require('fs')
  , path = require('path')
  , assert = require('assert')
  , linelint = require('../lib/index.js');

function readFile (p) {
  return fs.readFileSync(path.join(__dirname, p), 'utf8');
}

describe('#verify', function () {

  it('Should return no invalid lines', function () {
    var lines = linelint.verify(readFile('./passing.txt'));

    assert.equal(Array.isArray(lines), true);
    assert.equal(lines.length, 0);
  });

  it('Should return 1 invalid line (Default - 80)', function () {
    var lines = linelint.verify(readFile('./fail-80.txt'), 80);

    assert.equal(Array.isArray(lines), true);
    assert.equal(lines.length, 1);
  });

  it('Should return 1 invalid line (80)', function () {
    var lines = linelint.verify(readFile('./fail-80.txt'), 80);

    assert.equal(Array.isArray(lines), true);
    assert.equal(lines.length, 1);
  });

  it('Should return 2 invalid lines (120)', function () {
    var lines = linelint.verify(readFile('./fail-120.txt'), 120);

    assert.equal(Array.isArray(lines), true);
    assert.equal(lines.length, 2);
  });

});
