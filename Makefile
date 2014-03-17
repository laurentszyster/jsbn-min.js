all: ugly rsa

ugly: deps/jsbn
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
		jsbnEcc.js \
		-o jsbn-min.js -e -c -m

rsa: deps/jsbn
	uglifyjs \
		deps/jsbn/jsbn.js \
		deps/jsbn/rng.js \
		deps/jsbn/rsa.js \
		deps/jsbn/sha1.js \
		jsbnRsaCrypt.js \
		-o jsbn-rsa-min.js -e -c -m

deps/jsbn:
	git clone https://github.com/jasondavies/jsbn deps/jsbn

