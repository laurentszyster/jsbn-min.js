ugly: jsbn-min.js jsbn-ecc-min.js jsbn-rsa-min.js 

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
		jsbnMin.js \
		jsbnEcc.js \
		jsbnRsaPublic.js \
		jsbnRsaPrivate.js \
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
		jsbnMin.js \
		jsbnEcc.js \
		-o jsbn-ecc-min.js -e -c -m

jsbn-rsa-min.js: deps/jsbn
	uglifyjs \
		deps/jsbn/jsbn.js \
		deps/jsbn/prng4.js \
		deps/jsbn/rng.js \
		deps/jsbn/rsa.js \
		deps/jsbn/sha1.js \
		jsbnMin.js \
		jsbnRsaPublic.js \
		-o jsbn-rsa-min.js -e -c -m

deps/jsbn:
	git clone https://github.com/jasondavies/jsbn deps/jsbn

clean:
	rm jsbn-min.js -f
	rm jsbn-ecc-min.js -f
	rm jsbn-rsa-min.js -f
	rm deps/jsbn -rf
