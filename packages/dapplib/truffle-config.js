require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note soccer mistake good knock frame turtle'; 
let testAccounts = [
"0x5b54adf64739b894378f800235a9aeb602055bddaff61aa6777d55c57b034541",
"0xeee53f330c5e9e0cfa79d57c913b936bb99092eb99259d546be23b4a3bf3fbaf",
"0xe9ed9e8411355e21fa3a0d193b886a1896661681cb0361d0698edc1928f81a14",
"0x27434899e8498d85acf90820df1257ea43bb84942c81798bb126d1c433c6eee9",
"0x896a2bd9a7a7a4cbc0ed5fb1c61cbdca9141ee23c9dc5d797ae2afae08cd5ea0",
"0x73235adaa101d7aa79323f5a7fe888badd3f469d791c8b63aa6a1f558b8483be",
"0xd9ff59ed8916f090d5c32ef06b2395eaad57217e19c4683ed05342a6b0957d05",
"0x5861c31c0df51293de16672bc42cbe76ba1e76ade58eb9465464d284124d55fe",
"0xaae4773515aa6966e705d02f9b8452d0da298219ebaee71533151a7722f7beba",
"0xb3de5a212fde60765b555d66808b2c5489dbd15219c2b0f9c968068a1ab2f2ce"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


