var JSBN_RNG = new SecureRandom();
function jsbn_big(string) {
	return new BigInteger(string);
}
function jsbn_random(bitLength) {
	return new BigInteger(bitLength||160, JSBN_RNG);
}
function jsbn_init(document) {
	function F() { rng_seed_time(); }
	document.body.addEventListener('click', F, false);
	document.body.addEventListener('keyPress', F, false);
}
function jsbn_hmac(key, data) {
	return hex_hmac_sha1(key, data).toUpperCase()
}
function jsbn_ec_random(curve) {
	var n = new BigInteger(curve.getN().toString()),
		n1 = n.subtract(BigInteger.ONE),
		r = new BigInteger(n.bitLength(), JSBN_RNG);
	return r.mod(n1).add(BigInteger.ONE);		
}
function jsbn_ec_generate(curve) {
	var a = jsbn_ec_random(curve),
		G = curve.getG(),
		P = G.multiply(a);
	return {
		v: a.toString(), 
		x: P.getX().toBigInteger().toString(),
		y: P.getY().toBigInteger().toString()
	};
}
function jsbn_ec_computeKey(curve, v, x, y) {
	var c = curve.getCurve(),
		P = new ECPointFp(
			c,
			c.fromBigInteger(new BigInteger(x)),
			c.fromBigInteger(new BigInteger(y))
		),
		a = new BigInteger(v);
	return P.multiply(a).getX().toBigInteger().toString();
}
function jsbn_rsa_generate(bits, exponent) {
	var rsa = new RSAKey();
	rsa.generate(bits||512, exponent||"10001");
	return {
		n: rsa.n.toString(16),
		e: rsa.e.toString(16),
		d: rsa.d.toString(16)
	};
}
function jsbn_rsa_private(rec) {
	var rsa = new RSAKey();
	rsa.setPrivate(rec.n, rec.e, rec.d);
	return rsa; 
}
function jsbn_rsa_public(rec) {
	var rsa = new RSAKey();
	rsa.setPublic(rec.n, rec.e);
	return rsa; 
}
window.jsbn = {
	init: jsbn_init,
	sha1: hex_sha1,
	hmac: jsbn_hmac,
	big: jsbn_big,
	random: jsbn_random,
	ec: {
		curve: getSECCurveByName,
		random: jsbn_ec_random,
		generate: jsbn_ec_generate,
		computeKey: jsbn_ec_computeKey
	},
	rsa: {
		generate: jsbn_rsa_generate,
		setPrivate: jsbn_rsa_private,
		setPublic: jsbn_rsa_public
	}
};