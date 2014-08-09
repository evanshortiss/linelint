linelint
========

CLI & Library to scan files for lines that exceed a specified width.


### Help Output
```
evan@Evans-MacBook-Pro:~/lintlint --help

  Usage: lintlint [options]

  Options:

    -h, --help            output usage information
    -l, --linelength <n>  Length that lines cannot exceed. Defaults to 80
    -V, --version         output the version number
```

### CLI Usage Example
Test all *.txt* files in the */test* directory for lines longer than 120
characters.

```
evan@Evans-MacBook-Pro:~/lintlint -l 120 ./test/*.txt

[PASS] /Users/evan/workspaces/work/linelint/test/fail-80.txt
[PASS] /Users/evan/workspaces/work/linelint/test/passing.txt
[FAIL] /Users/evan/workspaces/work/linelint/test/fail-120.txt
   Lines: 3, 5
```

### Library Usage Example
Pretty easy here. Require it as you would any module and call the *verify*
function.

```javascript
var linelint = require('linelint')
  , fs = require('fs');

// Invalid lines is an array of line numbers
var invalidLines = linelint.verify(fs.readFileSync('./test.js', 'utf8'));
```

### API

##### verify(str[, length]);
Check the contents of a string *str* have no lines longer than *length*
characters. If *length* is omitted 80 is used as a default. If you read a file
as a Buffer you must call the *toString* method on the buffer first as the
library assumes you provide a string.