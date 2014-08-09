linelint
========

CLI to scan files for lines that exceed a specified width.


### Help Output
```
evan@Evans-MacBook-Pro:~/lintlint --help

  Usage: lintlint [options]

  Options:

    -h, --help            output usage information
    -l, --linelength <n>  Length that lines cannot exceed. Defaults to 80
    -V, --version         output the version number
```

### Usage Example
Test all *.txt* files in the */test* directory for lines longer than 120
characters.

```
evan@Evans-MacBook-Pro:~/lintlint -l 120 ./test/*.txt
[PASS] /Users/eshortie/workspaces/work/linelint/test/fail-80.txt
[PASS] /Users/eshortie/workspaces/work/linelint/test/passing.txt
[FAIL] /Users/eshortie/workspaces/work/linelint/test/fail-120.txt
   Lines: 3, 5
```