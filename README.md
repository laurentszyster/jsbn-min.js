jsbn-min.js
===
Two flavors of Tom Wu's pure JavaScript implementation of arbitrary-precision integer arithmetic, enclosed with a practical API and minified: `jsbn-min.js` and `jsbn-rsa-min.js`.

Synopsis - Key Agreement.
---
Generate ECDH keys and return immediately stringifiable objects that can be stored, loaded and exchanged between JSON applications to compute their shared secret.
```javascript
var curve = jsbn.ec.curve("secp256r1"),
Alice = jsbn.ec.generate(curve),
Bob = jsbn.ec.generate(curve),
AliceSecret = jsbn.ec.computeKey(curve, Alice.v, Bob.x, Bob.y),
BobSecret = jsbn.ec.computeKey(curve, Bob.v, Alice.x, Alice.y);
```
Hash challenges with SHA1, returns HEX encoded keys.
```javascript
jsbn.hmac(AliceSecret, "challenge") == jsbn.hmac(BobSecret, "challenge");
```

Synopsis - RSA encryption
---
Generate a key, returns an object that can be immediately stringified, a practical form to store and exchange keys between JSON applications.
```javascript
var json = jsbn.rsa.generate(512);
window.locaStorage.setItem("MyKey", JSON.stringify(json));
```
Read a JSON record from storage as a public RSA key and encrypt something.
```javascript
var json = JSON.parse(window.locaStorage.getItem("MyKey")),
publicKey = jsbn.rsa.setPublic(json),
encrypted = publicKey.encrypt("something");
```
Read a JSON record from storage as private RSA key and decrypt that something.
```javascript
var json = JSON.parse(window.locaStorage.getItem("MyKey")),
privateKey = jsbn.rsa.setPrivate(json),
cleartext = privateKey.decrypt(encrypted);
```