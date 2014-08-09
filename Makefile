mocha 		= ./node_modules/.bin/mocha
jshint		= ./node_modules/.bin/jshint
lintspaces 	= ./node_modules/.bin/lintspaces

.PHONY : test

default: format

# Test file for formatting and errors, then run tests
test:format
	$(mocha) -R spec ./test/*.js

# Test file formatting and for errors
format:
	$(lintspaces) -nt -i js-comments -d spaces -s 2 ./lib/*.js ./bin/*.js
	@echo "lintspaces pass!\n"
	$(jshint) ./lib/*.js ./bin/*.js
	@echo "JSHint pass!\n"