function jsbn_rsa_public(rec) {
	var rsa = new RSAKey();
	rsa.setPublic(rec.n, rec.e);
	return rsa; 
}
window.jsbn.rsa = {
	setPublic: jsbn_rsa_public
};