'use strict';

var os = require('os');

/**
 * @public
 * Check the lines in the provided string are less than a certain length.
 * Returns an array containg lines that are longer than maxLen.
 * @param   {String} str
 * @param   {Number} [maxLen]
 * @returns {Array}
 */
exports.verify = function (str, len) {
  var lines = str.trim().split(os.EOL)
    , invalidLines = []
    , i = 0;

  if (!len) {
    len = 80;
  }

  for (i = 0; i < lines.length; i++) {
    if (lines[i].length > len) {
      invalidLines.push(i + 1);
    }
  }

  return invalidLines;
};
