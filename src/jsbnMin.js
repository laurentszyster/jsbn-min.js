var JSBN_RNG = new SecureRandom();
function jsbn_big(string) {
	return new BigInteger(string);
}
function jsbn_random(bitLength) {
	return new BigInteger(bitLength||160, JSBN_RNG);
}
function jsbn_init(document) {
	var body = document.body;
	function F() { 
		rng_seed_time(); 
	}
	if (body.addEventListener) {
		body.addEventListener('click', F, false);
		body.addEventListener('keyPress', F, false);
	} else { // IE8 anyone ?
		body.attachEvent('onclick', F);
		body.attachEvent('keyPress', F);
	}
}
function jsbn_hmac(key, data) {
	return hex_hmac_sha1(key, data).toUpperCase()
}
window.jsbn = {
	init: jsbn_init,
	sha1: hex_sha1,
	hmac: jsbn_hmac,
	big: jsbn_big,
	random: jsbn_random
};