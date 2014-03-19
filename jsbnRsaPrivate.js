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
window.jsbn.rsa.generate = jsbn_rsa_generate;
window.jsbn.rsa.setPrivate = jsbn_rsa_private;