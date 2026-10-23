const selfsigned = require('selfsigned');
const fs = require('fs');
const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, { days: 365, keySize: 2048 });
fs.writeFileSync('key.pem', pems.private);
fs.writeFileSync('cert.pem', pems.cert);
console.log('Done! key.pem aur cert.pem ban gaye');
