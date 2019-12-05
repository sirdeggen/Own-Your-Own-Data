const bsv = require('bsv')
const Mnemonic = require('bsv/mnemonic')
const ecies = require('electrum-ecies')

// the following mnemonic is random and empty please do not use as it is obviously now compromised, in a real situation you would use your own moneybutton mnemonic from your paper backup.

// mnemonic to HDwallet. Replace words with your own Mnemonic
let nemo = Mnemonic.fromString('derive animal kite noble genuine author twice theory silent bless entry near')

// HD wallet root private Key
let hdkey = nemo.toHDPrivateKey()

// pki used for paymail at moneybutton.com is the first address path with another /0 appended
let pki = hdkey.deriveChild("m/44'/0'/0'/0/0/0")

// this is what paymail returns when you request a pki response, and what all your data has been encypted to
// See the response to verify it's the same here: 
// https://www.moneybutton.com/.well-known/bsvalias follow the the pki capability link, and add your handle to the URL
// eg. https://www.moneybutton.com/api/v1/bsvalias/id/baemail@moneybutton.com

// this should be the same as the pubkey from the link above if you use your own mnemonicm and paymail.
let pkiPublicKey = pki.publicKey.toString()

// To decrypt paste in some data by finding it in whatsonchain.com for example
yourHexData = '42494531020b2629f3d5c99cf1837d618a9563e15ef53eb8be357338066524a39e787e251b9a92b814157305bee67e5701fe02e92405f867ca7f926be9cb937b4109cc943f47112dd362925bbfb5a4d6064b9f4e8c704b91078f41b0dc5d58231383ade18d19939e79b07aa76005b004f08a9eb36a3e412f5f5c7584ea2cbf99d3fb48d5db4659debbbb085b3791605e3d33f40a2ae328ca2215d0db81ee9d3f7e3b7d7e0b9add7172d866a006d03f95a83f70d9d9b2ca581e0cf25350a31b449d5a144cb23f71c798ac3903e247b90f115896fbb0'

// change encoding to base64
let encryptedBase = bsv.util.buffer.hexToBuffer(yourHexData).toString('base64')

// decrypt using ECIES
let decryptedContent = ecies.decrypt(encryptedBase, pki.privateKey).toString()

// Then deal with whatever the data is
console.log(decryptedContent)
