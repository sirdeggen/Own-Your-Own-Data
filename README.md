# Own Your Own Data: Disaster Recovery
Use this to recover any of the data encrypted using electrum flavour ECIES.

If you own your own data then you ought to know how to get it back for disaster recovery purposes. Now the data itself is on chain and so will likely be served by a number of services once they begin to charge people micro fees for access.

This quick tool will allow you to take that on chain encrypted data, and decrypt it using only your BIP44 Mnemonic. 

In short: use yout Moneybutton backup 12 words mnemonic to decrypt data which you own.

The example hex data will not decrypt with your own keys, you need to replace it, but here's where it's from:
https://whatsonchain.com/tx/65070cc451f620e9863bd6851cbbe2758aad29f294354008b8595308fd8600fd

Specifically, it's the 4th data push after the OP_RETURN in a Baemail. This is where the encrypted data for Baemail is kept. Different protocols use different placement for this.

![Example](https://bico.media/b/ad86741053bb1df375bbe9cd4f1a1ce8588957126ff6bd69fe8883f0629abb36.jpg)
