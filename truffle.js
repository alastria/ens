module.exports = {
  networks: {
    'dev.fifs': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    'dev.auction': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
    //Dont forget adding alastria network
  }
};
/* Example:
'alastra': {
  host: "alastrianodeip",
  port: 22000,
  network_id: "*",
  gas: 0xfffff,
  gasPrice: 0x0,
  from: "yourAccount"
}
*/
