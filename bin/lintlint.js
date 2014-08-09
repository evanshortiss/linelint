#!/usr/bin/env node

'use strict';

var fs = require('fs')
  , lint = require('../lib')
  , path = require('path')
  , program = require('commander')
  , version = require('../package.json').version
  , files = null
  , res = [];

require('colors'); // It's colours I tell ya. Colours!!!

program
  .option('-l, --linelength', 'Length that lines cannot exceed. Defaults to 80')
  .version(version)
  .parse(process.argv);

// Check for valid files
files = process.argv.filter(function (f) {
  if (f === process.argv[1]) {
    return false;
  } else {
    return fs.existsSync(f);
  }
});

// Run the check on each file
files.forEach(function (f) {
  res.push({
    path: f,
    lines: lint.verify(fs.readFileSync(f, 'utf8'), parseInt(program.linelength))
  });
});

// Sort files from pass to worst offender
res.sort(function (a, b) {
  if (a.lines < b.lines) {
    return -1;
  } else if (a.lines > b.lines) {
    return 1;
  } else {
    return 0;
  }
});

// Log results
res.forEach(function (f) {
  if (f.lines.length === 0) {
    console.log('%s %s', '[PASS]'.green, path.resolve(f.path));
  } else {
    console.log('%s %s', '[FAIL]'.red, path.resolve(f.path));
    console.log('\t Lines: %s', f.lines.join(', '));
  }
});
