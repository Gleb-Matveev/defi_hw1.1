const ethers = require("ethers");

// scripts/index.js
async function main () {
    // Retrieve accounts from the local node
    const url = "http://127.0.0.1:8545/";
    const customHttpProvider = new ethers.JsonRpcProvider(url);
    //const accounts = await customHttpProvider.listAccounts();
    //console.log(accounts);

    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const Lock = customHttpProvider.getContractFactory('Lock');
    //const Lock = await ethers.getContractFactory('Lock');
    const lock = Lock.attach(address);

    const value = await lock.getName();
    console.log('Num is: ', value.toString());
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });