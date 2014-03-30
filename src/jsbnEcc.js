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
window.jsbn.ec = {
	curve: getSECCurveByName,
	random: jsbn_ec_random,
	generate: jsbn_ec_generate,
	computeKey: jsbn_ec_computeKey
};