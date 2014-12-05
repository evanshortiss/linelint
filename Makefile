mocha 		= ./node_modules/.bin/mocha
jshint		= ./node_modules/.bin/jshint
uglifyjs 	= ./node_modules/.bin/uglifyjs
browserify 	= ./node_modules/.bin/browserify
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


# Build the browser usable version
build:test
	$(browserify) -e ./lib/index.js -o ./dist/linelint.js -s linelint
	$(uglifyjs) ./dist/linelint.js -m -c -o ./dist/linelint.min.js