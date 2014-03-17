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
	rsa: {
		setPublic: jsbn_rsa_public
	}
};