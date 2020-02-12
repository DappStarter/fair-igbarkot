require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food nose raise magic estate hunt pave army genre'; 
let testAccounts = [
"0x8f9ca8864eb32c94f1701a451c4990a5e03e81ec6f5fec89d15992d4bfe3f7d8",
"0x006d835b8e08d966dfbdc851f8288609f7b9dafb1df93d840855c79339764f04",
"0x6e9b7e8c5e046ba4712b1f36aa6cc5e01053f271e518eca5258c15a2d92d1fb1",
"0xb184cd22f8663b8de6ac83642020811a13b32e20ce9929a668815f99b0faad3d",
"0x09ca59ff444df4bcdb3733e535b4f6f894b2d4cbbcefecce4e60b8725605433a",
"0x09e98f98a89c02a6ff58824a0ac63d0172930f1c05297286f789f1ca323437f1",
"0x74c7331fe2f0e3cf75faeeab7f05fe5529056eaae72302ba12e15c5912fab30b",
"0x683bed6a3731aecc4b2d3b11142c007a984f232b1799d64186dbc89b6e82d48c",
"0xa39d19521a85be3d513cec42cea99b08dd31f8feed3b4adc24faf83d2de9d103",
"0xf5be9c75d2fc1ec2d30e7a80fb1599aec166f4a983b8f37cf7168fa90e47bcfb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
