module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    }
  },
  compilers: {
    solc: {
      version: "0.8.9",
    }
  }
};
