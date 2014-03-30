jsbn-min.js
===
[![Build Status](https://travis-ci.org/laurentszyster/jsbn-min.js.svg)](https://travis-ci.org/laurentszyster/jsbn-min.js)

Three flavors of Tom Wu's library, enclosed with a practical API and minified: `jsbn-min.js`, `jsbn-ecc-min.js` and `jsbn-rsa-min.js`.

Synopsis
---
All three distributables share a common API that provide access to a selection of JSBN functions: SHA1 in hex, SHA1 HMAC in hex, a BigInteger factory and a big random generator (of 160 bits by default):

~~~
jsbn.init()
jsbn.sha1(data)
jsbn.hmac(data, key)
jsbn.big(string)
jsbn.random(bitLength=160)
~~~

Note that the `jsbn.init` must be called at least once to provide enthropy to JSBN's random generator.

### jsbn.rsa.setPublic

In `jsbn-rsa-min.js` there is just enough to read a JSON record from storage as a public RSA key and encrypt something.

~~~javascript
var json = JSON.parse(window.locaStorage.getItem("MyKey")),
publicKey = jsbn.rsa.setPublic(json),
encrypted = publicKey.encrypt("something");
~~~

In JSON, an RSA public key looks like this, hex encoded modulus and exponent:

~~~javascript
{
    n: "C4E3F7212602E1E396C0B6623CF11D26204ACE3E7D26685E037AD2507DCE82FC28F2D5F8A67FC3AFAB89A6D818D1F4C28CFA548418BD9F8E7426789A67E73E41",
    e: "10001"
}
~~~

This module is perfect to receive a session public key from and sign a session challenge for web service that are limited to RSA (like PHP).

Under 5KB once gzipped, it brings a lot of bangs per bytes to any application.

### jsbn.ec

Another great part of JSBN is its implementation of elliptic curve.

Generate ECDH keys and return immediately stringifiable objects that can be stored, loaded and exchanged between JSON applications to compute their shared secret.

~~~javascript
var curve = jsbn.ec.curve("secp256r1"),
Alice = jsbn.ec.generate(curve),
Bob = jsbn.ec.generate(curve),
AliceSecret = jsbn.ec.computeKey(curve, Alice.v, Bob.x, Bob.y),
BobSecret = jsbn.ec.computeKey(curve, Bob.v, Alice.x, Alice.y);
~~~

Hash challenges with SHA1, returns HEX encoded keys.

~~~javascript
jsbn.hmac(AliceSecret, "challenge") == jsbn.hmac(BobSecret, "challenge");
~~~

This module provides just enough to exchange strong cryptographic keys, its does not (directly) support symmetric encryption, supports only SHA1 and HEX encoding.

But it's enough to prevent a wide range of network exploit: identity theft, device impersonation, session hijacking and any other exploit made possible by a man-in-the-middle attack against an HTTP or HTTPS application. 

### jsbn.rsa.setPrivate

To get most of JSBN's functions, including Ellipict Curves and RSA private key generation, use `jsbn-min.js`.

Generate an RSA key of 512 bits, returns an object that can be immediately stringified, a practical form to store and exchange keys between JSON applications.

~~~javascript
var json = jsbn.rsa.generate(512);
window.locaStorage.setItem("MyKey", JSON.stringify(json));
~~~

In JSON an RSA private key is hexencoded modulus `n`, public and private exponent:

~~~javascript
{
    n: "C4E3F7212602E1E396C0B6623CF11D26204ACE3E7D26685E037AD2507DCE82FC28F2D5F8A67FC3AFAB89A6D818D1F4C28CFA548418BD9F8E7426789A67E73E41",
    e: "10001",
    d: "7cd1745aec69096129b1f42da52ac9eae0afebbe0bc2ec89253598dcf454960e3e5e4ec9f8c87202b986601dd167253ee3fb3fa047e14f1dfd5ccd37e931b29d"
}
~~~

Read a JSON record from storage as private RSA key and decrypt something.

~~~javascript
var json = JSON.parse(window.locaStorage.getItem("MyKey")),
privateKey = jsbn.rsa.setPrivate(json),
cleartext = privateKey.decrypt(encrypted);
~~~

For those rare web applications that demand RSA and EC key exhanges, you won't get a better deal under 12KB gzipped.

Use Cases
---
Simple web user registration, identification and authorization against PHP5 or any web platform with decent support for RSA.

Fast user registration, identification and authorization against Erlang or any web platform with decent support for elliptic curve cryptography.

Peer applications that need to hash distributed resource keys and identify peers in their network.

All the fields of application for SHA1, big random and ECDH key exchange.

Note
---
"*If you think cryptography is the answer to your problem, then you don't know what your problem is*" - Peter G. Neumann, quoted in the New York Times, February 20 2001.

This is even more true for a web application in an open network with an unsafe name resolution system.

A targeted man-in-the-middle attack that exploits DNS is so simple and effective that there is no way to enforce any safety for clients or servers on the web.

Some well applied cryptography can only mitigate the defect of DNS and prevent man-in-the-middle attacks against peers allready guarded by a key exchange.