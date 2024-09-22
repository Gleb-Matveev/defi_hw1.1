import React, { useEffect, useState, useRef, Component } from 'react';
import { ethers } from "ethers";
import pic from './ethlogo.png';
import { Buffer } from 'buffer';
import "./App.css";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      buffer: null 
    };
  }

  captureFile = (event) => {
    event.preventDefault()
    console.log('file captured');

    const file = event.target.files[0];
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer : Buffer(reader.result) })
      //console.log('buffer', myBuffer)
    }

    console.log(event.target.files[0]);
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("submittimg form");
  }

  render () {
    return (
      <div className="App">
        <div className="row mt-5">

            <img src={pic} alt="logo"/>

            <h2>Change picture</h2>
            <form onSubmit={this.onSubmit} >
              <input type='file' onChange={this.captureFile}/>
              <input type='submit'/>
            </form>

        </div>
      </div>
    );
  }
}
    /*function App() {
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
    let contract_read = new ethers.Contract(address, abi, provider);
    let signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
    const contract_write = new ethers.Contract(address, abi, signer);
    
    //const [testValue, setTestValue] = useState('');
    const [storedPrice, setStoredPrice] = useState('');
    const [newPrice, setNewPrice] = useState('');

    const getStockValue = async () => {
      try {
        var contractPrice = await contract_read.getStockValue();
        setStoredPrice(parseInt(contractPrice));  
        console.log("Stock value: ", contractPrice);
      } catch (error) {
        console.log("getStockValue Error: ", error);
      }
    }

    async function updateStockValue()  {
      try {
        let tx = await contract_write.changeStockValue(parseInt(newPrice));
        setNewPrice("");

        await tx.wait();
        await getStockValue();
      } catch (error) {
        console.log("New value Error: ", error);
      }
    }
    
    getStockValue()
      .catch(console.error)

    return (
      <div className="App">
        <div className="row mt-5">

          <div className="col">
            <h3>Apple stock value: {storedPrice}</h3>
          </div>

            <input type="text"
              onChange={(e) => setNewPrice(e.target.value)}
              value={newPrice}
              placeholder="Set new stock value"
            />

            <div className="custom-buttons">
              <button className='button' onClick={updateStockValue}>
                Update
              </button>
            </div>

            <h2>Change picture</h2>
            <form>
              <input type='file' onChange={this.captureFile}/>
              <input type='submit' />
            </form>

        </div>
      </div>
    );
}*/

export default App;