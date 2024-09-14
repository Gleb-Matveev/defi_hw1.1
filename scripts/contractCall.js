const ethers = require("ethers");
/*var fs = require('fs');
const fsPromises = fs.promises;

const ABI_FILE_PATH = 'artifacts/contracts/Lock.sol/Lock.json';

async function getAbi() {
  const data = await fs.readFile(ABI_FILE_PATH, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  const abi = JSON.parse(data)['abi'];
  return abi;
}*/

async function main () {
    const url = "http://127.0.0.1:8545/";
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    let provider = ethers.getDefaultProvider(url);
    const abi = [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_stock_value",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "stock_value",
            "type": "uint256"
          }
        ],
        "name": "StockValueChange",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newStockValue",
            "type": "uint256"
          }
        ],
        "name": "changeStockValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getStockValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "stock_value",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];

    let contract = new ethers.Contract(address, abi, provider);
    
    var num = await contract.getStockValue();
    console.log(num);

    var addressDeployer = await contract.getOwner();
    console.log(addressDeployer);


    let signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
    const write_contract = new ethers.Contract(address, abi, signer);
    let tx = await write_contract.changeStockValue(parseInt256(15));
    await tx.wait();
    num = await contract.getStockValue();
    console.log(num);
    //console.log('asd');
}
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });