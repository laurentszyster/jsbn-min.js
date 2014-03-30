test: ugly
	phantomjs deps/make_test.js/run_qunit.js

ugly: pull jsbn-min.js jsbn-ecc-min.js jsbn-rsa-min.js 

jsbn-min.js: deps/jsbn
	uglifyjs \
		deps/jsbn/jsbn.js \
		deps/jsbn/jsbn2.js \
		deps/jsbn/prng4.js \
		deps/jsbn/rng.js \
		deps/jsbn/rsa.js \
		deps/jsbn/rsa2.js \
		deps/jsbn/ec.js \
		deps/jsbn/sec.js \
		deps/jsbn/base64.js \
		deps/jsbn/sha1.js \
		src/jsbnMin.js \
		src/jsbnEcc.js \
		src/jsbnRsaPublic.js \
		src/jsbnRsaPrivate.js \
		-o jsbn-min.js -e -c -m

jsbn-ecc-min.js: deps/jsbn
	uglifyjs \
		deps/jsbn/jsbn.js \
		deps/jsbn/jsbn2.js \
		deps/jsbn/prng4.js \
		deps/jsbn/rng.js \
		deps/jsbn/ec.js \
		deps/jsbn/sec.js \
		deps/jsbn/base64.js \
		deps/jsbn/sha1.js \
		src/jsbnMin.js \
		src/jsbnEcc.js \
		-o jsbn-ecc-min.js -e -c -m

jsbn-rsa-min.js: deps/jsbn
	uglifyjs \
		deps/jsbn/jsbn.js \
		deps/jsbn/prng4.js \
		deps/jsbn/rng.js \
		deps/jsbn/rsa.js \
		deps/jsbn/sha1.js \
		src/jsbnMin.js \
		src/jsbnRsaPublic.js \
		-o jsbn-rsa-min.js -e -c -m

pull: deps
	cd deps/jsbn && git pull origin
	cd deps/make_test.js && git pull origin

deps: deps/jsbn deps/make_test.js test/qunit-1.14.0.js test/qunit-1.14.0.css

deps/jsbn:
	git clone https://github.com/jasondavies/jsbn deps/jsbn

deps/make_test.js:
	git clone \
		https://github.com/unframed/make_test.js \
		deps/make_test.js

CDNJS_AJAX_LIBS = http://cdnjs.cloudflare.com/ajax/libs

test/qunit-1.14.0.js:
	wget "${CDNJS_AJAX_LIBS}/qunit/1.14.0/qunit.js" -O "test/qunit-1.14.0.js"

test/qunit-1.14.0.css:
	wget "${CDNJS_AJAX_LIBS}/qunit/1.14.0/qunit.css" -O "test/qunit-1.14.0.css"

clean:
	rm *-min.js -f
	rm deps/* -rf

install:
	mkdir deps
