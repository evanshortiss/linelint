linelint
========

CLI & JS Library (Node.js and Browser) to scan files/text for lines that exceed 
a specified column width.


### Install
Just use npm. 

```
npm install linelint
```

### CLI Help Output
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


### API Usage Example
Pretty easy here. Require it as you would any module and call the *verify*
function. This can also be used in the browser to scan strings of text. Using 
browserify will allow you to call this using _require_. Alternatively use one 
of the files in the _/dist_ directory.

```javascript
var linelint = require('linelint')
  , fs = require('fs');

// Invalid lines is an array of line numbers
var invalidLines = linelint.verify(fs.readFileSync('./test.js', 'utf8'));
```


### API
Scanning files via the CLI will use the 
[EOL (End of Line)](http://nodejs.org/api/os.html#os_os_eol) delimeter for the 
OS upon which you're running. In the browser "\n" will be used.

##### verify(str[, length]);
Check the contents of a string *str* have no lines longer than *length*
characters. If *length* is omitted 80 is used as a default. If you read a file
as a Buffer you must call the *toString* method on the buffer first as the
library assumes you provide a string.
